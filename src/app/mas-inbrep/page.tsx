import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "+INBREP",
  description:
    "Recursos, artículos, devocionales, videos y actividades abiertas a toda la comunidad, más allá del aula.",
};

const RECURSOS = [
  "Recursos descargables.",
  "Libros y materiales de estudio.",
  "Devocionales.",
  "Artículos bíblicos, teológicos y ministeriales.",
  "Videos y contenidos formativos.",
  "Masterclasses.",
  "Seminarios y actividades especiales.",
  "Nuevos recursos desarrollados por nuestra comunidad educativa.",
];

export default function MasInbrepPage() {
  return (
    <>
      <PageHero
        eyebrow="+INBREP"
        title="Recursos para crecer. Contenidos para compartir."
        lead="Un área institucional que reúne contenidos, recursos y actividades extracurriculares abiertos a todas las personas."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            INBREP es más que un espacio de formación académica. Creemos que
            el conocimiento bíblico y teológico también debe convertirse en
            recursos capaces de acompañar, fortalecer y equipar a la
            comunidad cristiana.
          </p>
          <p>
            No necesitás ser estudiante de INBREP para acceder. +INBREP nace
            con el propósito de poner herramientas útiles al alcance de
            quienes desean seguir creciendo en su fe, profundizar en las
            Escrituras y encontrar nuevos recursos para su vida y servicio.
          </p>
        </div>

        <div className="mt-14">
          <Eyebrow tone="ember">Un espacio para seguir aprendiendo</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Qué vas a encontrar en +INBREP
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECURSOS.map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-ink/10 bg-paper p-5 text-sm font-medium text-ink-2 shadow-sm"
              >
                {r}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Continuamente buscamos crear nuevos contenidos que respondan a
            las preguntas, necesidades y desafíos de la Iglesia y del mundo
            actual.
          </p>
        </div>
      </section>

      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page max-w-2xl">
          <Eyebrow>Nuestra convicción</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl">
            Conocimiento que se comparte
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Creemos que aquello que aprendemos también puede convertirse en
            una herramienta para bendecir a otros. Por eso +INBREP busca
            extender la misión educativa del instituto más allá del aula,
            creando recursos accesibles que ayuden a personas, familias,
            líderes, pastores e iglesias a comprender mejor su fe y servir
            mejor en sus comunidades.
          </p>
          <p className="mt-4 font-display text-lg italic text-ember-dark">
            +INBREP es formación que trasciende el aula y se pone al
            servicio de la comunidad.
          </p>
          <div className="mt-7">
            <Button href="/comunidad" variant="primary">
              Sumate a la Comunidad INBREP
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
