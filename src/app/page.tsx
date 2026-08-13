import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";

const STRIP = [
  "100% Virtual",
  "Sincrónico + On-demand",
  "Chile · Sudamérica · Hispanoamérica",
  "Diplomatura → Bachiller → Licenciatura",
];

const PROGRAMS = [
  {
    name: "Diplomatura en Biblia",
    desc: "El primer tramo del recorrido formativo: bases sólidas en Antiguo y Nuevo Testamento, interpretación bíblica y pensamiento cristiano.",
  },
  {
    name: "Bachiller en Teología",
    desc: "Profundización en Teología Sistemática y Práctica, con foco en práctica ministerial y liderazgo dentro de la comunidad eclesial.",
  },
  {
    name: "Licenciatura en Teología",
    desc: "El nivel de mayor alcance académico, conforme al plan de estudios establecido, para servir con excelencia y sana doctrina.",
  },
];

const NEWS = [
  {
    tag: "Inscripciones",
    title: "Ciclo académico 2026",
    desc: "Estamos preparando el calendario con fechas de inicio de clases, exámenes y cierres.",
  },
  {
    tag: "Seminarios",
    title: "Encuentros y conferencias",
    desc: "Muy pronto vas a poder ver acá los próximos seminarios y conferencias abiertas a la comunidad.",
  },
  {
    tag: "Convocatorias",
    title: "Nuevas cohortes",
    desc: "Estamos organizando la apertura de nuevas cohortes para los distintos programas de INBREP.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />

        <div className="container-page relative flex flex-col gap-10 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <Eyebrow>Instituto Bíblico Renacer Pentecostal</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Formando obreros fieles para la obra del Señor
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/75">
              Una comunidad educativa interdenominacional que une excelencia
              académica y profunda vida espiritual, para pastores, líderes y
              familias de toda la América hispanohablante.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/programas" variant="primary">
                Conocé nuestra oferta académica
              </Button>
              <Button href="/admision" variant="secondary">
                Sumate a INBREP
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/60">
              <Link href="/admision" className="underline decoration-sun/50 underline-offset-4 hover:text-cream">
                Ir a inscripción
              </Link>
              <Link href="/donar" className="underline decoration-sun/50 underline-offset-4 hover:text-cream">
                Quiero donar
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-sm self-center">
            <Image
              src="/brand/isotipo-color.svg"
              alt=""
              width={200}
              height={244}
              className="pointer-events-none absolute -top-14 -right-4 h-32 w-auto drop-shadow-2xl sm:-top-16 sm:h-40 lg:-top-20 lg:-right-8 lg:h-48"
            />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="font-display text-2xl italic leading-snug text-sun sm:text-3xl">
                &ldquo;Formamos obreros para la obra del Reino&rdquo;
              </p>
              <div className="mt-8 h-px w-full bg-white/10" />
              <p className="mt-8 text-sm leading-relaxed text-cream/70">
                Comprometidos con la Palabra de Dios, la iglesia de Jesucristo
                y la comunidad.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/15">
          <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 text-xs font-semibold uppercase tracking-wider text-cream/60 sm:text-sm">
            {STRIP.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Bienvenida</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Comenzá tu formación hoy
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            El servicio ministerial exige cada vez más en el mundo actual. La
            brecha entre la preparación de la iglesia y las necesidades reales
            aumenta, y por eso desarrollamos una propuesta educativa integral,
            pensada para acercar la Biblia y la Teología a pastores, líderes,
            adultos y familias.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            El Instituto Bíblico Renacer Pentecostal une excelencia académica
            y profunda vida espiritual, con un recorrido formativo que va
            desde una Diplomatura en Biblia hasta una Licenciatura en
            Teología.
          </p>
          <div className="mt-8">
            <Button href="/admision" variant="ghost">
              Comenzá tu formación hoy
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Biblia (AT y NT)" },
            { label: "Práctica Ministerial" },
            { label: "Teología Sistemática" },
            { label: "Teología Práctica" },
            { label: "Interpretación Bíblica" },
            { label: "Pensamiento Cristiano" },
          ].map((area) => (
            <div
              key={area.label}
              className="rounded-2xl border border-ink/10 bg-paper p-5 text-sm font-medium text-ink-2 shadow-sm"
            >
              {area.label}
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Oferta académica</Eyebrow>
              <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
                Un camino de crecimiento espiritual y académico
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/70">
              Descubrí el camino de crecimiento espiritual y académico que se
              ajusta a tu llamado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((program, i) => (
              <div
                key={program.name}
                className="flex flex-col rounded-2xl border border-ink/15 bg-white/70 p-7"
              >
                <span className="font-display text-4xl text-ink/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {program.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {program.desc}
                </p>
                <Link
                  href="/programas"
                  className="mt-6 text-sm font-semibold text-ember-dark hover:text-ember"
                >
                  Ver plan de estudios →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow>Novedades</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Últimas noticias y anuncios
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                {item.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <Eyebrow tone="ember">Voces de la comunidad</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Testimonios de estudiantes y egresados
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-dashed border-ink/15 bg-paper/60 p-6"
              >
                <p className="font-display text-lg italic leading-snug text-ink-2/70">
                  &ldquo;Muy pronto vas a poder leer acá las historias de
                  nuestros estudiantes, egresados y pastores.&rdquo;
                </p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
                  Testimonio próximamente
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />
        <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Preparate para tu ingreso a INBREP y comenzá tu formación con
            nosotros
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admision" variant="primary">
              Aplicar ahora
            </Button>
            <Button href="/programas" variant="secondary">
              Conocé nuestros programas
            </Button>
            <Button href="/programas#plan" variant="secondary">
              Descargá el plan académico
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
