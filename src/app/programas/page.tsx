import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Oferta académica",
  description:
    "Diplomatura en Estudios Bíblicos y Teológicos, certificados, especializaciones y cursos del Instituto Bíblico Renacer Pentecostal.",
};

const DATOS_DIPLOMATURA = [
  { label: "Duración", value: "3 años" },
  { label: "Estructura", value: "15 bimestres; 5 bimestres por año" },
  { label: "Carga académica", value: "1.440 horas cátedra; 96 horas por bimestre" },
  { label: "Asignaturas", value: "54 asignaturas" },
  { label: "Modalidad", value: "Virtual sincrónica, con clases en vivo" },
  { label: "Cursada", value: "Lunes, martes y miércoles" },
  { label: "Horario", value: "19:30 a 23:00" },
  { label: "Calendario", value: "Marzo a diciembre" },
];

const TRAYECTOS = [
  {
    trayecto: "Estudios del Antiguo Testamento",
    certificacion: "Certificado en Estudios Bíblicos del Antiguo Testamento",
  },
  {
    trayecto: "Estudios del Nuevo Testamento",
    certificacion: "Certificado en Estudios Bíblicos del Nuevo Testamento",
  },
  {
    trayecto: "Antiguo Testamento + Nuevo Testamento",
    certificacion: "Diplomatura en Estudios Bíblicos",
  },
  {
    trayecto: "Práctica Ministerial",
    certificacion: "Certificado en Práctica Ministerial",
  },
  {
    trayecto: "Estudios Teológicos",
    certificacion: "Certificado en Estudios Teológicos",
  },
  {
    trayecto: "Práctica Ministerial + Estudios Teológicos",
    certificacion: "Diplomatura en Ministerio y Estudios Teológicos",
  },
  {
    trayecto:
      "Diplomatura en Estudios Bíblicos + Diplomatura en Ministerio y Estudios Teológicos",
    certificacion: "Diplomatura en Estudios Bíblicos y Teológicos",
  },
];

const COMPETENCIAS = [
  "Interpretar las Escrituras aplicando principios hermenéuticos, exegéticos y herramientas elementales de hebreo y griego.",
  "Comprender la unidad y el desarrollo del mensaje bíblico a través del Antiguo y el Nuevo Testamento.",
  "Articular las principales doctrinas cristianas desde la teología bíblica y sistemática.",
  "Ubicar los textos bíblicos y la vida de la Iglesia en sus contextos históricos, culturales y geográficos.",
  "Comunicar la Palabra con claridad mediante predicación expositiva, narrativa y enseñanza bíblica.",
  "Evaluar desafíos éticos, filosóficos y teológicos contemporáneos con discernimiento cristiano.",
];

const PERFIL_EGRESADO = [
  "Estudio e interpretación responsable del texto bíblico.",
  "Predicación y enseñanza en contextos eclesiales.",
  "Liderazgo y administración ministerial.",
  "Evangelismo, misiones y formación de comunidades.",
  "Acompañamiento pastoral, consejería y trabajo con familias.",
];

type Materia = { nombre: string; horas: number };
type Bimestre = { numero: number; materias: Materia[] };
type Anio = { numero: number; horas: number; bimestres: Bimestre[] };

const PLAN_ESTUDIOS: Anio[] = [
  {
    numero: 1,
    horas: 480,
    bimestres: [
      {
        numero: 1,
        materias: [
          { nombre: "Hebreo Elemental", horas: 24 },
          { nombre: "Griego Elemental", horas: 24 },
          { nombre: "Historia Bíblica", horas: 24 },
          { nombre: "Filosofía", horas: 24 },
        ],
      },
      {
        numero: 2,
        materias: [
          { nombre: "Teología Sistemática I", horas: 32 },
          { nombre: "Hermenéutica I", horas: 24 },
          { nombre: "Ética Cristiana", horas: 20 },
          { nombre: "Apologética", horas: 20 },
        ],
      },
      {
        numero: 3,
        materias: [
          { nombre: "Historia Eclesiástica Occidental I", horas: 28 },
          { nombre: "Hermenéutica II", horas: 24 },
          { nombre: "Homilética I", horas: 24 },
          { nombre: "Liderazgo Cristiano", horas: 20 },
        ],
      },
      {
        numero: 4,
        materias: [
          { nombre: "Teología Sistemática II", horas: 32 },
          { nombre: "Pentateuco I", horas: 32 },
          { nombre: "Evangelios Sinópticos", horas: 32 },
        ],
      },
      {
        numero: 5,
        materias: [
          { nombre: "Exégesis Bíblica", horas: 24 },
          { nombre: "Evangelio de San Juan", horas: 24 },
          { nombre: "Hechos de los Apóstoles", horas: 24 },
          { nombre: "Teología del Antiguo Testamento", horas: 24 },
        ],
      },
    ],
  },
  {
    numero: 2,
    horas: 480,
    bimestres: [
      {
        numero: 1,
        materias: [
          { nombre: "Interpretación del Antiguo Testamento", horas: 24 },
          { nombre: "Interpretación del Nuevo Testamento", horas: 24 },
          { nombre: "Epístolas Paulinas I", horas: 24 },
          { nombre: "Homilética II", horas: 24 },
        ],
      },
      {
        numero: 2,
        materias: [
          { nombre: "Teología Sistemática III", horas: 32 },
          { nombre: "Pentateuco II", horas: 32 },
          { nombre: "Epístolas Paulinas II", horas: 32 },
        ],
      },
      {
        numero: 3,
        materias: [
          { nombre: "Teología del Nuevo Testamento", horas: 24 },
          { nombre: "Epístolas Paulinas III", horas: 24 },
          { nombre: "Epístolas Pastorales", horas: 24 },
          { nombre: "Teología Pastoral I", horas: 24 },
        ],
      },
      {
        numero: 4,
        materias: [
          { nombre: "Teología Sistemática IV", horas: 32 },
          { nombre: "Libros Históricos I", horas: 32 },
          { nombre: "Libros Poéticos I", horas: 32 },
        ],
      },
      {
        numero: 5,
        materias: [
          { nombre: "Misiones", horas: 24 },
          { nombre: "Evangelismo y Comunidades Misionales", horas: 24 },
          { nombre: "Historia Eclesiástica Occidental II", horas: 24 },
          { nombre: "Teología de la Familia", horas: 24 },
        ],
      },
    ],
  },
  {
    numero: 3,
    horas: 480,
    bimestres: [
      {
        numero: 1,
        materias: [
          { nombre: "Teología Sistemática V", horas: 32 },
          { nombre: "Libros Históricos II", horas: 32 },
          { nombre: "Libros Poéticos II", horas: 32 },
        ],
      },
      {
        numero: 2,
        materias: [
          { nombre: "Teología Pastoral II", horas: 24 },
          { nombre: "Consejería Bíblica", horas: 24 },
          { nombre: "Epístolas Generales I", horas: 24 },
          { nombre: "Teología Contemporánea", horas: 24 },
        ],
      },
      {
        numero: 3,
        materias: [
          { nombre: "Teología Sistemática VI", horas: 32 },
          { nombre: "Profetas Mayores I", horas: 32 },
          { nombre: "Profetas Menores I", horas: 32 },
        ],
      },
      {
        numero: 4,
        materias: [
          { nombre: "Administración Eclesiástica", horas: 24 },
          { nombre: "Consejería Familiar", horas: 24 },
          { nombre: "Epístolas Generales II", horas: 24 },
          { nombre: "Historia Eclesiástica Occidental III", horas: 24 },
        ],
      },
      {
        numero: 5,
        materias: [
          { nombre: "Profetas Mayores II", horas: 32 },
          { nombre: "Profetas Menores II", horas: 32 },
          { nombre: "Libros Proféticos: Daniel y Apocalipsis", horas: 32 },
        ],
      },
    ],
  },
];

const OTROS_PROGRAMAS = [
  {
    nombre: "Certificado en Biblia",
    desc: "Un recorrido de cinco asignaturas para quienes desean comenzar una formación bíblica sistemática y fortalecer su comprensión general de las Escrituras. Es una propuesta accesible para miembros de iglesias, maestros, líderes y servidores que buscan una primera experiencia de formación organizada.",
    cta: "Conocé el Certificado en Biblia",
  },
  {
    nombre: "Especialización en Hebreo",
    desc: "Un trayecto de tres asignaturas orientado al aprendizaje progresivo de herramientas elementales para el estudio del Antiguo Testamento en su idioma original, fortaleciendo la observación, el análisis y la interpretación responsable del texto bíblico.",
    cta: "Conocé la Especialización en Hebreo",
  },
  {
    nombre: "Especialización en Griego",
    desc: "Un trayecto de tres asignaturas orientado al aprendizaje progresivo de herramientas elementales para el estudio del Nuevo Testamento en su idioma original, acercando al estudiante a la lectura, el análisis y la interpretación responsable del texto bíblico.",
    cta: "Conocé la Especialización en Griego",
  },
  {
    nombre: "Actualización ministerial",
    desc: "Una propuesta dirigida especialmente a pastores, líderes y servidores que desean actualizar conocimientos, profundizar áreas específicas y fortalecer su práctica ministerial, con desafíos bíblicos, teológicos, pastorales, pedagógicos, organizacionales y misioneros.",
    cta: "Conocé las próximas actualizaciones",
  },
  {
    nombre: "Cursos, seminarios y masterclasses",
    desc: "Propuestas breves para profundizar temas específicos, conocer nuevos enfoques y continuar creciendo sin necesidad de incorporarse inmediatamente a un trayecto extenso, incluyendo actividades gratuitas y abiertas a la comunidad.",
    cta: "Conocé las próximas actividades",
  },
  {
    nombre: "EBL — Escuela Bíblica Local",
    desc: "Una propuesta para iglesias que desean implementar o fortalecer su propio espacio de formación bíblica mediante currículos, materiales docentes y estudiantiles, orientación pedagógica y acompañamiento.",
    cta: "Conocé EBL",
    href: "/ebl",
  },
];

export default function ProgramasPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta académica"
        title="Formación para comprender, crecer y servir"
        lead="Podés comenzar con un certificado breve, profundizar en un área específica o construir progresivamente un recorrido integral que combina Biblia, Teología y Ministerio."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap gap-3">
          <Button href="/admision" variant="primary">
            Quiero conocer los programas
          </Button>
          <Button href="/admision" variant="ghost">
            Quiero estudiar en INBREP
          </Button>
        </div>

        {/* Diplomatura */}
        <div className="mt-14">
          <Eyebrow tone="ember">Nuestro programa insignia</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Diplomatura en Estudios Bíblicos y Teológicos
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Formación integral para estudiar las Escrituras con rigor,
            articular la teología y servir a la Iglesia con profundidad
            bíblica. La Diplomatura articula tres grandes áreas: Biblia,
            Teología y Ministerio.
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {DATOS_DIPLOMATURA.map((d) => (
              <div key={d.label} className="bg-paper p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {d.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Trayectos acumulativos */}
        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Trayectos y titulaciones acumulativas
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            El recorrido permite avanzar mediante certificaciones
            acumulativas. Cada etapa completada reconoce la formación
            alcanzada y, al combinar los trayectos correspondientes, el
            estudiante puede obtener diplomaturas de mayor alcance.
          </p>
          <div className="mt-6 space-y-3">
            {TRAYECTOS.map((t) => (
              <div
                key={t.certificacion}
                className="flex flex-col gap-2 rounded-2xl border border-ink/10 bg-paper p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <p className="text-sm text-muted sm:flex-1">{t.trayecto}</p>
                <p className="text-sm font-semibold text-ember-dark sm:flex-1">
                  → {t.certificacion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Competencias y perfil */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Competencias que se desarrollan
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPETENCIAS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Perfil del egresado
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Al finalizar la Diplomatura, el estudiante contará con una
              formación integral para estudiar, explicar y enseñar la
              Biblia, integrar la reflexión teológica con la vida de la
              Iglesia y asumir responsabilidades de servicio con madurez
              ministerial. Estará preparado para desarrollarse en áreas
              como:
            </p>
            <ul className="mt-4 space-y-3">
              {PERFIL_EGRESADO.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plan de estudios */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>54 asignaturas · 1.440 horas cátedra</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Plan de estudios de la Diplomatura
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
            La secuencia expresa la progresión académica recomendada. Las
            cargas indicadas corresponden a horas cátedra.
          </p>

          <div className="mt-10 space-y-12">
            {PLAN_ESTUDIOS.map((anio) => (
              <div key={anio.numero}>
                <h3 className="font-display text-xl font-semibold">
                  Año {anio.numero} — {anio.horas} horas
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {anio.bimestres.map((b) => {
                    const horasBimestre = b.materias.reduce((s, m) => s + m.horas, 0);
                    return (
                      <div
                        key={b.numero}
                        className="rounded-2xl border border-ink/15 bg-white/70 p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                          Bimestre {b.numero} · {horasBimestre}h
                        </p>
                        <ul className="mt-3 space-y-2">
                          {b.materias.map((m) => (
                            <li key={m.nombre} className="text-xs leading-snug">
                              <span className="font-medium">{m.nombre}</span>
                              <span className="text-ink/50"> — {m.horas}h</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otros programas */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Otras opciones</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Otros programas y trayectos
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OTROS_PROGRAMAS.map((p) => (
            <div
              key={p.nombre}
              className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{p.nombre}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <Link
                href={p.href ?? "/contacto"}
                className="mt-4 text-sm font-semibold text-ember-dark hover:text-ember"
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Modalidad */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <Eyebrow>Cómo se cursa</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Modalidad de estudio
          </h2>
          <p className="mt-5 leading-relaxed text-ink/80">
            Las clases regulares se desarrollan de manera virtual y
            sincrónica, por videoconferencia. Esto permite que estudiantes de
            diferentes ciudades y países participen en tiempo real,
            interactúen con sus docentes y compartan el proceso con sus
            compañeros.
          </p>
          <p className="mt-3 leading-relaxed text-ink/80">
            Cuando una clase no puede ser cursada en vivo, la grabación puede
            quedar disponible en la plataforma académica para acompañar la
            continuidad del aprendizaje, conforme a las condiciones de cada
            programa.
          </p>
          <p className="mt-3 leading-relaxed text-ink/80">
            La modalidad busca combinar la cercanía del encuentro en vivo con
            la flexibilidad necesaria para responder a las realidades
            familiares, laborales y ministeriales de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
        <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Elegí tu próximo paso
          </h2>
          <p className="max-w-xl text-balance leading-relaxed text-cream/75">
            No todas las personas necesitan comenzar por el mismo lugar.
            Podés iniciar con un certificado, una especialización, una
            actividad breve o un trayecto integral.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contacto" variant="secondary">
              Quiero recibir orientación
            </Button>
            <Button href="/admision" variant="primary">
              Quiero estudiar en INBREP
            </Button>
            <Button href="/admision" variant="secondary">
              Conocé admisión y aranceles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
