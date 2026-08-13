import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "Tu aporte ayuda a becar estudiantes, producir recursos educativos y sostener la misión del Instituto Bíblico Renacer Pentecostal.",
};

const DESTINOS = [
  {
    title: "Becas para estudiantes",
    desc: "Ayudanos a acompañar a personas que desean estudiar, pero no cuentan con los recursos económicos necesarios para acceder o continuar su formación. Puede contribuir al pago total o parcial de matrículas, aranceles y otras necesidades académicas.",
  },
  {
    title: "Producción de recursos educativos",
    desc: "Colaborá con la creación de materiales bíblicos, teológicos y ministeriales para estudiantes, docentes, iglesias y comunidades: manuales, libros, estudios, devocionales, videos, clases y pódcast.",
  },
  {
    title: "Crecimiento institucional",
    desc: "Apoyá el fortalecimiento de la estructura académica, administrativa y tecnológica: nuevos programas, capacitación de equipos y mejora de nuestros procesos para llegar a más personas.",
  },
  {
    title: "Proyectos misioneros y EBL",
    desc: "Contribuí al desarrollo de iniciativas vinculadas con MissioDei y la Escuela Bíblica Local: producir materiales, capacitar maestros, acompañar iglesias y fortalecer comunidades locales.",
  },
  {
    title: "Donación general",
    desc: "También podés realizar un aporte sin asignarlo a un proyecto específico. INBREP lo destinará al área de mayor necesidad, teniendo en cuenta las prioridades académicas, ministeriales e institucionales del momento.",
  },
];

const PASOS = [
  {
    title: "Escribinos",
    desc: "Completá el formulario de contacto e indicanos que deseás colaborar con INBREP.",
  },
  {
    title: "Elegí tu modalidad",
    desc: "Podrás optar por realizar una donación única o establecer un aporte mensual.",
  },
  {
    title: "Indicá el destino",
    desc: "Elegí el área o proyecto que querés apoyar. También podés realizar una donación general para que sea utilizada según la necesidad prioritaria de la institución.",
  },
  {
    title: "Recibí la información necesaria",
    desc: "Nuestro equipo se comunicará con vos para brindarte los datos y orientaciones correspondientes para completar tu aporte.",
  },
];

const OTRAS_FORMAS = [
  "Orando por nuestros estudiantes, docentes, equipos y proyectos.",
  "Compartiendo nuestros programas y recursos.",
  "Conectándonos con iglesias, ministerios y posibles aliados.",
  "Participando de nuestras actividades.",
  "Ofreciendo conocimientos, experiencia o tiempo de servicio.",
  "Ayudándonos a llegar a personas que necesitan oportunidades de formación.",
];

export default function DonarPage() {
  return (
    <>
      <PageHero
        eyebrow="Donar"
        title="Ayudanos a acercar formación bíblica y teológica a más personas"
        lead="Trabajamos para que las barreras económicas, geográficas y personales no impidan que quienes desean prepararse puedan acceder a una educación de calidad."
        tone="ember"
      />

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            Cada contribución, independientemente de su monto, nos ayuda a
            seguir desarrollando la misión de INBREP. Al apoyar nuestro
            trabajo, participás en la formación de estudiantes, maestros,
            líderes, pastores, plantadores de iglesias, misioneros y
            servidores que desean conocer profundamente las Escrituras y
            poner lo aprendido al servicio de sus comunidades.
          </p>
          <p>
            No se trata solamente de sostener una institución. Se trata de
            invertir en personas que pueden fortalecer y acompañar a muchas
            otras.
          </p>
        </div>
        <div className="mt-6">
          <Button href="#aportar" variant="primary">
            Quiero apoyar a INBREP
          </Button>
        </div>

        <div className="mt-14">
          <Eyebrow tone="ember">Destino de tu aporte</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            ¿A qué podés destinar tu aporte?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINOS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegí cómo acompañarnos */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>Modalidad</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Elegí cómo acompañarnos
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink/15 bg-white/70 p-7">
              <h3 className="font-display text-xl font-semibold">Donación única</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Realizá una contribución puntual para apoyar alguna de
                nuestras áreas, proyectos o necesidades actuales.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/15 bg-white/70 p-7">
              <h3 className="font-display text-xl font-semibold">Aporte mensual</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Sumate como colaborador recurrente y ayudanos a sostener
                nuestra misión mediante un aporte periódico, que nos permite
                planificar responsablemente y dar continuidad a nuestros
                proyectos.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold text-ember-dark">
            No existe un aporte demasiado pequeño. La constancia de muchas
            personas puede producir un impacto significativo.
          </p>
        </div>
      </section>

      {/* Cómo realizar un aporte */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Paso a paso</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          ¿Cómo realizar un aporte?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Inicialmente, los aportes se coordinarán mediante contacto directo
          con nuestro equipo.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
              <span className="font-display text-3xl text-ink/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <div id="aportar" className="mt-14 max-w-3xl rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-ink">Quiero apoyar a INBREP</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Contanos cómo querés colaborar y nuestro equipo se va a
            comunicar con los datos y orientaciones necesarias.
          </p>
          <div className="mt-6">
            <ContactForm subject="Donación — INBREP" submitLabel="Quiero apoyar a INBREP" />
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          Valoramos profundamente la confianza de quienes deciden acompañar
          nuestra misión. Por eso procuramos administrar cada contribución
          con responsabilidad, integridad y claridad, respetando el destino
          acordado y utilizándola para fortalecer el trabajo académico,
          educativo, ministerial e institucional de INBREP.
        </p>
      </section>

      {/* Otras maneras de colaborar */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <Eyebrow>Más allá del dinero</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Otras maneras de colaborar
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {OTRAS_FORMAS.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-2xl border border-ink/15 bg-white/70 p-4 text-sm leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
        <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Formá parte de nuestra misión
          </h2>
          <p className="max-w-xl text-balance leading-relaxed text-cream/75">
            Con tu acompañamiento podemos otorgar nuevas becas, producir más
            recursos, fortalecer iglesias locales y continuar construyendo
            una comunidad educativa fiel a las Escrituras.
          </p>
          <Button href="#aportar" variant="primary">
            Quiero apoyar a INBREP
          </Button>
        </div>
      </section>
    </>
  );
}
