import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "MissioDei",
  description:
    "El brazo de vinculación misional de INBREP: equipar, ayudar y acompañar a quienes trabajan por el avance del evangelio.",
};

const AREAS = [
  "Fortalecimiento de iglesias y comunidades locales.",
  "Plantación y consolidación de nuevas iglesias.",
  "Proyectos evangelísticos y misioneros.",
  "Formación y acompañamiento de líderes, plantadores y equipos de servicio.",
  "Producción y distribución de recursos para la Gran Comisión.",
  "Acciones de servicio y respuesta a necesidades concretas de las comunidades.",
  "Vinculación entre iglesias, ministerios, proyectos y colaboradores.",
];

const INVOLUCRARSE = [
  {
    title: "Orar",
    desc: "Acompañá espiritualmente a las personas, iglesias y proyectos vinculados con MissioDei.",
  },
  {
    title: "Enviar",
    desc: "Ayudanos a conectar personas, equipos, iglesias y recursos con lugares donde existe una necesidad.",
  },
  {
    title: "Ofrendar",
    desc: "Colaborá con el desarrollo de materiales, capacitaciones, proyectos misioneros y acciones de servicio.",
  },
  {
    title: "Servir",
    desc: "Poné tus dones, profesión, experiencia y tiempo al servicio de iniciativas concretas.",
  },
];

export default function MissioDeiPage() {
  return (
    <>
      <PageHero
        eyebrow="MissioDei"
        title="La formación también nos mueve a la misión"
        lead="MissioDei es el brazo de vinculación misional de INBREP con la comunidad: una iniciativa creada para desarrollar, gestionar y distribuir recursos que acompañen el cumplimiento de la Gran Comisión."
        tone="ember"
      />

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            Creemos que conocer más profundamente a Dios y su Palabra debe
            impulsarnos a participar activamente en su obra. MissioDei nació
            de INBREP, con identidad y dinámica propia, para escuchar las
            necesidades de las iglesias, sus líderes, plantadores y
            misioneros, acompañar sus proyectos y colaborar con el trabajo
            que ya están realizando en sus propios contextos.
          </p>
        </div>

        <div className="mt-14">
          <Eyebrow tone="ember">Nuestra misión</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Equipar. Ayudar. Acompañar.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Queremos contribuir con proyectos que fortalezcan a las
            comunidades cristianas locales, impulsen nuevas iniciativas
            misioneras y generen recursos para servir allí donde existe una
            necesidad concreta. MissioDei puede involucrarse en iniciativas
            relacionadas con:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {AREAS.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink-2 shadow-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page max-w-2xl">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl">
            Una iniciativa vinculada e independiente
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            MissioDei mantiene una relación directa con INBREP y comparte su
            compromiso con las Escrituras, la Iglesia y la misión de Dios.
            Al mismo tiempo, cuenta con una identidad y una dinámica de
            trabajo propias, lo que le permite desarrollar alianzas,
            proyectos y formas de acompañamiento específicas para el campo
            misional.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            La formación académica, los recursos educativos y la experiencia
            de nuestra comunidad pueden ponerse así al servicio de iglesias
            y proyectos que trabajan en diferentes contextos.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Sumate</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          ¿Cómo podés involucrarte?
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INVOLUCRARSE.map((i) => (
            <div key={i.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-ember-dark">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{i.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted">
          Queremos construir una red de personas e iglesias dispuestas a
          aprender, colaborar y participar activamente en la misión de Dios.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contacto" variant="primary">
            Quiero recibir más información
          </Button>
          <Button href="/contacto" variant="ghost">
            Quiero involucrarme
          </Button>
        </div>
      </section>
    </>
  );
}
