Despliegue con Portainer y Nginx Proxy Manager

Resumen rápido

- Construye y publica la imagen Docker en GitHub Container Registry (GHCR) mediante la GitHub Action incluida (`.github/workflows/docker-publish.yml`).
- En tu VPS con Portainer y Nginx Proxy Manager, crea una red Docker externa llamada `proxy` (o adapta `docker-compose.prod.yml`).
- En Portainer crea un stack usando la imagen `ghcr.io/<owner>/<repo>:latest` o desplega desde `docker-compose.prod.yml` apuntando a la imagen.
- Configura un Proxy Host en Nginx Proxy Manager que apunte a `inbrep-web:3000` en la red `proxy`.

Pasos detallados

1) Preparar GHCR

- La action publica la imagen en `ghcr.io/${{ github.repository }}:latest` cuando haces push a `main`.
- Asegúrate de que el repositorio sea público o que tu cuenta/organización permita paquetes impersonales. Si necesitas usar Docker Hub, adapta el workflow.

2) En el VPS (Portainer + Nginx Proxy Manager)

- Crear red docker para el proxy (ejecutar en el VPS):

```bash
docker network create proxy
```

- En Portainer crea un nuevo Stack y usa `docker-compose.prod.yml` (ajusta `image:` si no usas GHCR env vars).
- Despliega el Stack. Portainer descargará la imagen de GHCR.

- En Portainer crea un nuevo Stack y usa `docker-compose.prod.yml`. Este archivo ahora incluye `build: .` para que Portainer construya la imagen en el VPS desde el repositorio. Si prefieres usar la imagen publicada en GHCR, deja el `image:` apuntando a `ghcr.io/<owner>/<repo>:latest`.
- Despliega el Stack. Si despliegas desde el repo, Portainer ejecutará la fase de build en el host y luego levantará el contenedor.

Pasos concretos para desplegar desde este repo

1. Subir el código a GitHub (asumiendo rama `main`):

```bash
git add .
git commit -m "Add CI, Docker and deployment files"
git push origin main
```

2. Esperar que la GitHub Action `Build and Publish Docker image` termine. Verifica en Actions > Build and Publish Docker image. La imagen se publicará en `ghcr.io/<owner>/<repo>:latest`.

3. En el VPS, conectarse y crear la red `proxy` si aún no existe:

```bash
ssh user@your-vps
docker network create proxy || true
```

4. (Si el repositorio/imagen es privada) Loguear en GitHub Container Registry:

```bash
echo $CR_PAT | docker login ghcr.io -u <github-username> --password-stdin
```

Donde `CR_PAT` es un token personal con `read:packages` scope almacenado como secreto en el VPS.

5. En Portainer -> Stacks -> Add stack, pega el contenido de `docker-compose.prod.yml` o sube el fichero y reemplaza `image:` si es necesario por `ghcr.io/<owner>/<repo>:latest`.

6. Deploy the stack. If you want to deploy from the VPS CLI instead:

```bash
# pull latest image
docker pull ghcr.io/<owner>/<repo>:latest

# run with docker-compose
docker compose -f docker-compose.prod.yml up -d
```

7. In Nginx Proxy Manager create a Proxy Host that forwards your domain to `inbrep-web:3000` on the `proxy` network and enable SSL (Let's Encrypt).

3) Configurar Nginx Proxy Manager

- En la interfaz de Nginx Proxy Manager -> Hosts -> Proxy Hosts -> Add Proxy Host.
- `Domain Names`: tu-dominio.example
- `Forward Hostname / IP`: `inbrep-web` (el nombre del contenedor en la misma red)
- `Forward Port`: `3000`
- Selecciona la red `proxy` en la configuración avanzada si aplica.
- Configura SSL (Let's Encrypt) desde Nginx Proxy Manager.

Notas

- Si preferís exponer en un puerto distinto o usar un subdominio, ajustad `docker-compose.prod.yml` y la regla del Proxy Host.
- Para actualizaciones automáticas: habilitar webhooks en Portainer o usar Watchtower para auto-actualizar contenedores cuando haya nueva imagen.
