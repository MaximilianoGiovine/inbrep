import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos, de dónde venimos y hacia dónde vamos: historia, visión y misión del Instituto Bíblico Renacer Pentecostal.",
};

const VALUES = [
  {
    title: "Excelencia académica",
    desc: "Un plan de estudios estructurado en Biblia, Teología Sistemática y Práctica, Interpretación Bíblica y Pensamiento Cristiano.",
  },
  {
    title: "Vida espiritual profunda",
    desc: "Formación respaldada en la sana doctrina y llena del Espíritu Santo, para pastores, líderes y sus equipos.",
  },
  {
    title: "Vocación de servicio",
    desc: "Pensamiento crítico orientado a la mejora continua, con impacto social y comunitario más allá de la iglesia local.",
  },
];

const SUBSECTIONS = [
  { title: "Historia de INBREP", anchor: "#historia" },
  { title: "Visión, misión y valores", anchor: "#historia" },
  { title: "Equipo directivo", anchor: "#equipo" },
  { title: "Equipo docente", anchor: "#equipo" },
  { title: "Declaración de fe", anchor: "#proximamente" },
  { title: "Cobertura y acreditaciones", anchor: "#proximamente" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Quiénes somos, de dónde venimos y hacia dónde vamos"
        lead="Una comunidad educativa interdenominacional al servicio del desarrollo, la edificación y el crecimiento del Cuerpo de Cristo."
      />

      {/* Subnav de subsecciones */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="container-page flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm font-medium text-muted">
          {SUBSECTIONS.map((s) => (
            <a key={s.title} href={s.anchor} className="hover:text-gold-dark">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* ¿Por qué una institución teológica? */}
      <section id="historia" className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Nuestra razón de ser</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              ¿Por qué una institución teológica?
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              El servicio ministerial exige cada vez más en el mundo actual.
              Así como la ciencia y la tecnología avanzan con rapidez,
              también crecen —de manera proporcional— las necesidades de
              nuestras comunidades de fe.
            </p>
          </div>

          <div className="space-y-5 leading-relaxed text-ink-2/90">
            <p>
              En la era del acceso inmediato al conocimiento, la iglesia está
              expuesta a un caudal constante de información: contenidos que
              enriquecen, pero también corrientes y cuestionamientos que se
              oponen a la fe que profesamos. Esto alcanza a todas las edades.
              Por eso, hoy se nos demanda desarrollar una capacidad crítica
              para analizar, reflexionar y discernir lo que consumimos.
            </p>
            <p>
              La brecha entre la preparación de la iglesia y las necesidades
              reales aumenta. Frente a este diagnóstico, nuestra propuesta
              educativa es integral y prioriza el uso de la tecnología para
              acercar la Biblia y la Teología no solo a pastores, ministros
              ordenados y sus equipos de liderazgo, sino también a adultos y
              padres de familia, con especial responsabilidad por niños,
              adolescentes y jóvenes que forman parte de la gran familia
              cristiana en Chile, Sudamérica y la América hispanohablante.
            </p>
            <p>
              El equipo fundador presenta con alegría esta comunidad
              educativa interdenominacional, al servicio del desarrollo, la
              edificación y el crecimiento del Cuerpo de Cristo. El Instituto
              Bíblico Renacer Pentecostal (INBREP) está pensado para unir
              excelencia académica y profunda vida espiritual. Nuestros
              programas contemplan un recorrido formativo que permite al
              estudiante acceder a una Diplomatura en Biblia, un Bachiller en
              Teología y culminar con una Licenciatura en Teología, conforme
              al plan de estudios establecido.
            </p>
            <p>
              La formación bíblico-teológica integral que proponemos busca un
              conocimiento amplio y sólido en las áreas de Biblia (Antiguo y
              Nuevo Testamento), Práctica Ministerial, Teología Sistemática,
              Teología Práctica, Interpretación Bíblica y Pensamiento
              Cristiano.
            </p>
            <p>
              El estudiante formado en INBREP desarrollará pensamiento
              crítico orientado a la búsqueda de soluciones y a la mejora
              continua. Su servicio no solo beneficiará a su iglesia local,
              sino que también tendrá un sentido social y comunitario,
              actuando como agente de cambio para el bien común.
            </p>
            <p>
              Creemos, sin dudas, que el Instituto Bíblico Renacer
              Pentecostal será el semillero de los futuros líderes que
              transformarán nuestra sociedad, anunciarán el evangelio y
              edificarán a otros con fundamentos claros y saludables,
              respaldados en la sana doctrina y llenos del Espíritu Santo.
            </p>
            <p className="font-display italic text-ink">— Equipo Fundador de INBREP</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>Lo que nos guía</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Nuestra visión, misión y valores
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink/15 bg-white/70 p-7"
              >
                <h3 className="font-display text-lg font-semibold text-ember-dark">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Nuestra historia</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Historia de INBREP
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[auto_1fr]">
          <div className="flex items-start gap-4 lg:flex-col lg:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/10 font-display text-xl font-bold text-gold-dark">
              2024
            </span>
          </div>
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              El Instituto Bíblico Renacer Pentecostal es fundado en el año
              2024 y nace con un pequeño grupo de estudiantes que forman
              parte de la primera camada de la institución académica. Entre
              ellos encontramos a pastores, líderes y laicos que aceptaron el
              llamado del Señor a formarse teológicamente para servir con
              mayores y mejores herramientas a la iglesia de Cristo.
            </p>
            <p>
              Nuestro seminario fue pensado e ideado para todas las personas
              que no pueden asistir a un seminario bíblico formal, por esta
              razón se articuló un programa de estudios de alto nivel
              académico pero con una modalidad flexible. Nuestra modalidad
              virtual permite que cada estudiante participe de las clases
              desde cualquier parte del mundo por videoconferencia de forma
              sincrónica. Pero si no puede asistir, la clase queda disponible
              en la plataforma académica de la institución para que nuestros
              estudiantes puedan verla y repetirla cuantas veces lo deseen,
              en modalidad on-demand.
            </p>
          </div>
        </div>
      </section>

      {/* Palabras de la dirección */}
      <section className="bg-ember py-16 text-cream sm:py-20">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          <blockquote className="font-display text-2xl italic leading-snug sm:text-3xl">
            &ldquo;Comprometidos con la Palabra de Dios, la iglesia de
            Jesucristo y la comunidad&rdquo;
          </blockquote>
          <blockquote className="font-display text-2xl italic leading-snug sm:text-3xl">
            &ldquo;Crecemos en su Palabra con el poder de su Espíritu&rdquo;
          </blockquote>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/70 sm:col-span-2">
            Palabras de la Dirección — INBREP
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="container-page py-16 sm:py-20">
        <Eyebrow>Nuestra gente</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Equipo directivo y docente
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Estamos preparando las fotos y biografías de nuestro equipo
          directivo y docente —nombre, área y iglesia de pertenencia— para
          presentarlos con el cuidado pastoral y académico que merecen.
        </p>
        <div id="proximamente" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Dirección General", "Coordinación Académica", "Cuerpo Docente", "Cobertura Espiritual"].map(
            (role) => (
              <div
                key={role}
                className="flex flex-col items-center rounded-2xl border border-dashed border-ink/15 bg-paper/60 p-6 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/5 font-display text-xl text-muted">
                  IB
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink">
                  {role}
                </h3>
                <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-dark">
                  Próximamente
                </span>
              </div>
            )
          )}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-teal-dark px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="max-w-xl text-balance font-display text-2xl font-semibold sm:text-3xl">
            Sumate a esta comunidad educativa interdenominacional
          </h2>
          <Button href="/admision" variant="primary">
            Conocé cómo inscribirte
          </Button>
        </div>
      </section>
    </>
  );
}
