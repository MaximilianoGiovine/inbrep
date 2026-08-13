import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programa EBL",
  description:
    "Escuela Bíblica Local: currículo, materiales y acompañamiento pedagógico de INBREP para fortalecer la formación bíblica en la iglesia local.",
};

const QUE_APORTA = [
  {
    title: "Orientación para organizar la escuela bíblica",
    desc: "Acompañamiento para definir la estructura, los tiempos, las responsabilidades, la modalidad y el recorrido general de la Escuela Bíblica Local.",
  },
  {
    title: "Programa curricular",
    desc: "Una propuesta ordenada de materias, cronograma, objetivos y contenidos para orientar el proceso formativo.",
  },
  {
    title: "Plan de curso para docentes",
    desc: "Una planificación por asignatura que ayuda a organizar los objetivos, contenidos, actividades y evaluaciones.",
  },
  {
    title: "Guía docente",
    desc: "Orientaciones temáticas, ideas generales e indicaciones pedagógicas para preparar y desarrollar cada clase.",
  },
  {
    title: "Estudio bíblico para el docente",
    desc: "Contenido de apoyo que permite profundizar el tema de la clase y enseñar con mayor claridad y seguridad.",
  },
  {
    title: "Guía de aprendizaje para el estudiante",
    desc: "Material complementario para acompañar el estudio, la reflexión, la aplicación y el seguimiento de cada materia.",
  },
  {
    title: "Capacitación y acompañamiento",
    desc: "Instancias de orientación, formación pedagógica, consultoría y soporte para los equipos responsables de implementar el programa.",
  },
];

const CURSOS = [
  {
    nombre: "Introducción Bíblica",
    desc: "Una aproximación general a la formación, transmisión, organización, contexto y mensaje de las Escrituras, con herramientas para comprender mejor la Biblia como un todo.",
  },
  {
    nombre: "Pentateuco",
    desc: "Un recorrido por los primeros libros de la Biblia, su contenido, estructura, contexto, teología y aporte al desarrollo de la historia bíblica.",
  },
  {
    nombre: "Evangelios Sinópticos",
    desc: "Un estudio de Mateo, Marcos y Lucas que permite conocer su contexto, estructura, énfasis, relación y presentación de la persona y obra de Jesucristo.",
  },
];

const CARGA_ACADEMICA = [
  { label: "Duración de cada curso", value: "8 semanas" },
  { label: "Carga total", value: "24 horas pedagógicas" },
  { label: "Carga semanal", value: "3 horas pedagógicas" },
  { label: "Duración de la hora pedagógica", value: "45 minutos" },
  { label: "Gestión de estudiantes", value: "A cargo de la iglesia local" },
];

const COMO_FUNCIONA = [
  {
    title: "La iglesia se contacta con INBREP",
    desc: "Conocemos su realidad, necesidades, objetivos, equipo docente y experiencia previa.",
  },
  {
    title: "Definimos la modalidad de acompañamiento",
    desc: "Seleccionamos los recursos y el nivel de asistencia que mejor respondan al proyecto de la iglesia.",
  },
  {
    title: "Organizamos la implementación",
    desc: "Acordamos currículo, calendario, responsabilidades, capacitación y entrega de materiales.",
  },
  {
    title: "La iglesia desarrolla su Escuela Bíblica Local",
    desc: "La comunidad gestiona la convocatoria, inscripción, clases y acompañamiento de sus estudiantes.",
  },
  {
    title: "INBREP acompaña el proceso",
    desc: "Brindamos los materiales y el soporte acordado para fortalecer la continuidad y la calidad del programa.",
  },
];

const BENEFICIOS = [
  "Una propuesta formativa ordenada y progresiva.",
  "Materiales preparados para docentes y estudiantes.",
  "Orientación pedagógica y académica.",
  "Ahorro de tiempo en la planificación y producción de contenidos.",
  "Mayor continuidad en los procesos de enseñanza.",
  "Capacitación y acompañamiento para los maestros.",
  "Flexibilidad para adaptar la implementación al contexto local.",
  "Fortalecimiento del discipulado y del servicio de los miembros.",
];

export default function EBLPage() {
  return (
    <>
      <PageHero
        eyebrow="Programa EBL"
        title="Formación bíblica para fortalecer la iglesia local"
        lead="EBL — Escuela Bíblica Local es una iniciativa de INBREP creada para ayudar a las iglesias a desarrollar o fortalecer su propio espacio de formación bíblica. EBL no reemplaza la identidad ni el ministerio de la iglesia: se pone a su servicio."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            La iglesia local conserva la conducción, la organización y el
            acompañamiento de sus estudiantes. INBREP aporta orientación
            pedagógica, currículo, materiales y herramientas para facilitar
            una enseñanza ordenada, bíblica y aplicable.
          </p>
          <p>
            EBL puede ser implementada por iglesias de diferentes
            tradiciones del cristianismo protestante. Nuestro propósito es
            ofrecer una base académica y pedagógica que cada comunidad pueda
            desarrollar responsablemente en su propio contexto, bajo la
            conducción de sus autoridades y maestros.
          </p>
        </div>
        <div className="mt-6">
          <Button href="#contacto-ebl" variant="primary">
            Quiero implementar EBL en mi iglesia
          </Button>
        </div>

        <div className="mt-14">
          <Eyebrow tone="ember">Qué aporta EBL</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Recursos y acompañamiento para tu iglesia
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {QUE_APORTA.map((q) => (
              <div key={q.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-ink">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos y carga académica */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>Cursos disponibles</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Materias listas para implementar
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {CURSOS.map((c) => (
              <div key={c.nombre} className="rounded-2xl border border-ink/15 bg-white/70 p-6">
                <h3 className="font-display text-lg font-semibold">{c.nombre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/70">
            La oferta podrá ampliarse progresivamente con nuevas materias
            bíblicas, teológicas y ministeriales.
          </p>

          <h3 className="mt-12 font-display text-xl font-semibold">
            Carga académica sugerida
          </h3>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {CARGA_ACADEMICA.map((c) => (
              <div key={c.label} className="bg-white/70 p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                  {c.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Implementación</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          ¿Cómo funciona?
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMO_FUNCIONA.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
              <span className="font-display text-3xl text-ink/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <Eyebrow>Para la iglesia</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Beneficios para la iglesia
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {BENEFICIOS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-ink/15 bg-white/70 p-4 text-sm leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Planes */}
      <section id="contacto-ebl" className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <Eyebrow tone="ember">Planes de acompañamiento</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Una propuesta a la medida de tu iglesia
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            EBL ofrece diferentes niveles de asistencia y recursos según las
            necesidades de cada iglesia. Las opciones pueden incluir
            orientación inicial, programa curricular, planes de curso, guías
            docentes, estudios bíblicos, materiales para estudiantes,
            capacitación y soporte.
          </p>
          <p className="mt-4 text-sm font-semibold text-ember-dark">
            Planes desde 30 USD.
          </p>
          <p className="mt-2 leading-relaxed text-muted">
            Nuestro equipo se comunicará con cada iglesia para conocer su
            proyecto y recomendar la alternativa más adecuada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contacto" variant="primary">
              Quiero conocer los planes
            </Button>
            <Button href="/contacto" variant="ghost">
              Quiero implementar EBL en mi iglesia
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-ink/50 hover:bg-ink/5"
            >
              Hablar con el equipo de EBL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
