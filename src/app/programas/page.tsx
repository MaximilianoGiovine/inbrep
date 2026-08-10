import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nuestros Programas",
  description:
    "Diplomatura en Biblia, Bachiller en Teología y Licenciatura en Teología: la oferta académica del Instituto Bíblico Renacer Pentecostal.",
};

const PROGRAMS = [
  {
    step: "01",
    name: "Diplomatura en Biblia",
    desc: "El primer tramo del recorrido formativo. Introduce al estudiante en el conocimiento amplio y sólido del Antiguo y Nuevo Testamento, la interpretación bíblica y el pensamiento cristiano.",
  },
  {
    step: "02",
    name: "Bachiller en Teología",
    desc: "Profundiza en Teología Sistemática y Teología Práctica, junto con la práctica ministerial, preparando al estudiante para roles de mayor responsabilidad dentro de su comunidad.",
  },
  {
    step: "03",
    name: "Licenciatura en Teología",
    desc: "El nivel de mayor alcance del recorrido formativo, conforme al plan de estudios establecido, para quienes buscan consolidar una vocación de liderazgo y servicio.",
  },
];

const AREAS = [
  "Biblia — Antiguo Testamento",
  "Biblia — Nuevo Testamento",
  "Práctica Ministerial",
  "Teología Sistemática",
  "Teología Práctica",
  "Interpretación Bíblica",
  "Pensamiento Cristiano",
];

const INFO_BLOCKS = [
  {
    title: "Modalidad",
    desc: "100% virtual. Clases sincrónicas por videoconferencia y disponibles luego en la plataforma académica en modalidad on-demand, para verlas cuantas veces lo necesites.",
  },
  {
    title: "Duración y requisitos",
    desc: "Cada programa tiene su propia duración y documentación requerida. Estamos terminando de definir el detalle final por cohorte.",
  },
  {
    title: "Plan de estudios",
    desc: "Materias, carga horaria y objetivos organizados por área. El PDF con el programa formativo detallado va a estar disponible próximamente para descarga.",
  },
  {
    title: "Certificación",
    desc: "Estamos definiendo el alcance formal de la certificación otorgada en cada nivel del recorrido formativo.",
  },
  {
    title: "Calendario académico",
    desc: "Fechas clave de inicio de clases, exámenes y cierres — disponibles próximamente junto con la apertura de inscripciones.",
  },
];

export default function ProgramasPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros Programas"
        title="Descubrí el camino de crecimiento espiritual y académico que se ajusta a tu llamado"
        lead="Un recorrido formativo pensado en tres niveles, con base bíblico-teológica integral y modalidad 100% virtual."
      />

      {/* Recorrido */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.name}
              className="relative flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 shadow-sm"
            >
              <span className="font-display text-4xl text-gold/60">{p.step}</span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
              {i < PROGRAMS.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-gold/50 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Áreas de estudio */}
      <section className="bg-ink-2 py-16 text-cream sm:py-20">
        <div className="container-page">
          <Eyebrow>Formación integral</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Áreas que estructuran cada programa
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-cream/85"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Info detallada */}
      <section id="plan" className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Lo que necesitás saber</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Modalidad, plan de estudios y certificación
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {INFO_BLOCKS.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {block.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-ember px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="max-w-xl text-balance font-display text-2xl font-semibold sm:text-3xl">
            Descubrí el camino de crecimiento espiritual y académico que se
            ajusta a tu llamado
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admision" variant="primary">
              Inscribirme ahora
            </Button>
            <Button href="/contacto" variant="secondary">
              Solicitar el plan de estudios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
