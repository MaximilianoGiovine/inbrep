import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Comunidad INBREP",
  description:
    "Un espacio abierto para recibir novedades, descubrir publicaciones y participar de los encuentros y actividades de INBREP.",
};

const QUIENES = [
  "Estudiantes y egresados.",
  "Docentes y colaboradores.",
  "Pastores, líderes y servidores.",
  "Iglesias y ministerios.",
  "Personas que siguen nuestros contenidos y publicaciones.",
  "Participantes de nuestras actividades.",
  "Personas interesadas en la Biblia, la teología y la formación cristiana.",
  "Todos aquellos que desean conocer y acompañar la vida de INBREP.",
];

const QUE_ENCONTRARAS = [
  {
    title: "Noticias y anuncios",
    desc: "Conocé las principales novedades de la institución, la apertura de nuevos programas, cursos, convocatorias, proyectos y oportunidades.",
  },
  {
    title: "Publicaciones y nuevos contenidos",
    desc: "Recibí información sobre los artículos, estudios, libros, devocionales, videos, pódcast, clases y recursos que publicamos a través de +INBREP y de nuestras diferentes plataformas.",
  },
  {
    title: "Encuentros y actividades",
    desc: "Participá de conferencias, conversatorios, clases abiertas, encuentros virtuales, actividades presenciales y otros espacios especiales organizados por INBREP.",
  },
  {
    title: "Espacios de crecimiento espiritual",
    desc: "Sumate a instancias de oración, reflexión bíblica, comunión y acompañamiento que nos ayuden a crecer juntos en nuestra relación con Dios.",
  },
  {
    title: "Vinculación ministerial",
    desc: "Conocé personas, iglesias, docentes, líderes y ministerios de diferentes lugares. Queremos generar oportunidades para compartir experiencias, aprender de otros y construir relaciones que fortalezcan el servicio cristiano.",
  },
  {
    title: "Beneficios y oportunidades académicas",
    desc: "Accedé a convocatorias, actividades especiales, beneficios académicos y nuevas oportunidades de formación desarrolladas para nuestra comunidad.",
  },
  {
    title: "Servicio y participación",
    desc: "Descubrí diferentes maneras de colaborar, participar de nuestros proyectos y poner tus dones, conocimientos y experiencia al servicio de la Iglesia y de la misión de Dios.",
  },
];

export default function ComunidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunidad"
        title="Un espacio abierto para encontrarnos, crecer y participar"
        lead="INBREP es más que un espacio de formación académica. Es una comunidad de personas, iglesias y ministerios que desean conocer profundamente las Escrituras, crecer espiritualmente y servir a Cristo desde sus propios contextos."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            No necesitás ser estudiante ni haber participado anteriormente de
            alguno de nuestros programas. Si llegaste desde nuestras redes
            sociales, conociste alguna de nuestras publicaciones,
            participaste de una actividad o simplemente querés saber más
            sobre lo que hacemos, también podés ser parte.
          </p>
          <p>
            Todos los que quieran conocer, aprender, participar y crecer
            junto a nosotros son bienvenidos.
          </p>
        </div>

        <div className="mt-14">
          <Eyebrow>Una comunidad abierta para todos</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Comunidad INBREP reúne a
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {QUIENES.map((q) => (
              <li
                key={q}
                className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink-2 shadow-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Queremos construir una comunidad amplia, cercana e
            interdenominacional, en la que personas de diferentes países,
            iglesias y tradiciones cristianas puedan encontrarse alrededor
            de la Palabra de Dios.
          </p>
        </div>
      </section>

      {/* Qué encontrarás */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow tone="ember">Contenidos y espacios</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            ¿Qué encontrarás en Comunidad INBREP?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {QUE_ENCONTRARAS.map((q) => (
              <div key={q.title} className="rounded-2xl border border-ink/15 bg-white/70 p-6">
                <h3 className="font-display text-lg font-semibold">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trasciende las distancias */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Una comunidad que trasciende las distancias
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              INBREP nació como una comunidad internacional, formada por
              personas de diferentes países que aprendieron a trabajar
              juntas aun a la distancia. Esa misma identidad continúa
              guiándonos. A través de los espacios digitales podemos
              encontrarnos, compartir recursos, estudiar, orar, desarrollar
              proyectos y acompañarnos desde diferentes ciudades, países e
              iglesias.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Somos más que un instituto bíblico
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Comunidad INBREP expresa nuestro deseo de caminar junto a las
              personas más allá de una materia, un curso o un programa
              académico. Queremos mantenernos cerca de quienes se relacionan
              con INBREP, compartir lo que estamos construyendo y crear
              nuevas oportunidades para aprender, participar, servir y
              crecer juntos. Somos una comunidad que aprende, enseña,
              comparte y sirve.
            </p>
          </div>
        </div>
      </section>

      {/* Sumate */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow tone="ember">Sumate</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              Sumate a la Comunidad INBREP
            </h2>
            <p className="mt-5 leading-relaxed text-ink/80">
              Si querés recibir nuestras novedades, conocer las próximas
              actividades, descubrir nuevas publicaciones y participar de los
              espacios que estamos desarrollando, te invitamos a sumarte. No
              importa desde qué país, iglesia o tradición cristiana
              participes. Hay un lugar para vos en nuestra comunidad.
            </p>
            <div className="mt-6">
              <Button href="/contacto" variant="ghost">
                Conocé nuestras próximas actividades
              </Button>
            </div>
          </div>

          <div className="mt-10 max-w-3xl rounded-3xl border border-ink/15 bg-white/70 p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Sumate a la Comunidad INBREP
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Dejanos tus datos para mantenerte al tanto de las novedades de
              INBREP.
            </p>
            <div className="mt-6">
              <ContactForm
                subject="Comunidad INBREP — nuevo miembro"
                submitLabel="Sumate a la Comunidad INBREP"
                successMessage="¡Gracias por sumarte! Ya formás parte de la Comunidad INBREP."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
