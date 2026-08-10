# Multi-stage build for Next.js production

FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
# Use Debian-slim so native modules can compile if needed. Install build
# dependencies commonly required by native modules during `npm install`.
RUN apt-get update && apt-get install -y --no-install-recommends \
	build-essential python3 ca-certificates && rm -rf /var/lib/apt/lists/*

# Use `npm ci` when a lockfile is present (reproducible installs).
# If there's no lockfile (Portainer may build from repo without it), fall back
# to `npm install --legacy-peer-deps`. Keep output visible (no --silent) so
# build logs in Portainer show the real npm error if it fails.
RUN sh -c "if [ -f package-lock.json ]; then npm ci; else npm install --legacy-peer-deps; fi"

# Build
COPY . .
RUN npm run build
RUN npm prune --production

# Production image
FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]
