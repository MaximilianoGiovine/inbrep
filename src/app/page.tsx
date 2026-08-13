import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";

const STRIP = [
  "100% Virtual",
  "Sincrónico + On-demand",
  "Comunidad Educativa Interdenominacional",
  "Chile · Sudamérica · Hispanoamérica",
];

const PILARES = [
  {
    title: "Conocer las Escrituras",
    desc: "Desarrollá una comprensión profunda de la Biblia, su historia, sus contextos, su mensaje y sus principales enseñanzas.",
  },
  {
    title: "Pensar teológicamente",
    desc: "Aprendé a relacionar las diferentes doctrinas cristianas, evaluar distintas perspectivas y formular convicciones bíblicas responsables.",
  },
  {
    title: "Crecer espiritualmente",
    desc: "Buscamos que el conocimiento no permanezca solamente en el aula, sino que transforme nuestra relación con Dios, nuestro carácter y nuestra manera de vivir.",
  },
  {
    title: "Servir a la Iglesia",
    desc: "Estudiamos para servir. Cada programa procura fortalecer los dones, ministerios y responsabilidades que Dios ha confiado a sus hijos.",
  },
];

const PERFILES = [
  "Miembros de iglesias que desean profundizar su fe.",
  "Maestros y educadores cristianos.",
  "Líderes y servidores.",
  "Pastores y equipos ministeriales.",
  "Plantadores de iglesias y misioneros.",
  "Personas que se están preparando para el ministerio.",
  "Creyentes que encuentran barreras geográficas, económicas, personales o ministeriales para acceder a otras oportunidades de formación.",
];

const TRAYECTOS = [
  {
    name: "Diplomaturas y trayectos integrales",
    desc: "Programas sistemáticos para quienes desean desarrollar una formación bíblica y teológica amplia, progresiva y organizada.",
  },
  {
    name: "Certificados y especializaciones",
    desc: "Recorridos enfocados en áreas específicas de la Biblia, los idiomas bíblicos, la teología y el ministerio.",
  },
  {
    name: "Cursos, actualizaciones y masterclasses",
    desc: "Propuestas de menor duración para continuar aprendiendo, actualizar conocimientos y profundizar en temas relevantes para la Iglesia.",
  },
];

const AREAS = [
  "Antiguo Testamento",
  "Nuevo Testamento",
  "Teología Sistemática",
  "Hebreo y Griego",
  "Hermenéutica y Exégesis",
  "Historia de la Iglesia",
  "Teología y Práctica Ministerial",
  "Evangelismo y Misiones",
  "Liderazgo y formación cristiana",
];

const RAZONES = [
  {
    title: "Fidelidad a las Escrituras",
    desc: "La Biblia es la autoridad fundamental de nuestra enseñanza. Buscamos estudiarla con profundidad, responsabilidad y atención a su contexto.",
  },
  {
    title: "Excelencia académica",
    desc: "Promovemos el estudio serio, el pensamiento crítico y una formación teológica rigurosa, clara y aplicable.",
  },
  {
    title: "Formación espiritual",
    desc: "Creemos que el conocimiento de Dios debe conducirnos a una relación más profunda con Él y a una vida transformada por el Espíritu Santo.",
  },
  {
    title: "Accesibilidad",
    desc: "Trabajamos para acercar oportunidades de formación a personas de diferentes lugares, contextos y realidades.",
  },
  {
    title: "Acompañamiento",
    desc: "Queremos conocer a nuestros estudiantes, acompañar sus procesos y ayudarlos a integrar lo aprendido con su vida y servicio.",
  },
];

const INICIATIVAS = [
  {
    name: "+INBREP",
    desc: "Un espacio abierto de artículos, estudios, libros, devocionales, videos, pódcast, clases y otros recursos para continuar aprendiendo.",
    cta: "Explorá +INBREP",
    href: "/mas-inbrep",
  },
  {
    name: "EBL — Escuela Bíblica Local",
    desc: "Un programa que ayuda a las iglesias a desarrollar su propio espacio de formación bíblica mediante currículos, materiales, orientación pedagógica y diferentes modalidades de acompañamiento.",
    cta: "Quiero implementar EBL en mi iglesia",
    href: "/ebl",
  },
  {
    name: "MissioDei",
    desc: "Nuestra iniciativa dedicada a generar recursos, formación y acompañamiento para la misión, la plantación de iglesias y el servicio a las comunidades locales.",
    cta: "Conocé MissioDei",
    href: "/missio-dei",
  },
];

const NOVEDADES = [
  "Apertura de nuevas materias y programas.",
  "Cursos, masterclasses y conferencias.",
  "Artículos, videos, pódcast y publicaciones.",
  "Convocatorias y oportunidades de participación.",
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
              Crecemos en su Palabra con el poder de su Espíritu
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/75">
              INBREP es el Instituto Bíblico Renacer Pentecostal, una Comunidad
              Educativa Interdenominacional dedicada a acercar formación bíblica,
              teológica y ministerial de calidad a quienes desean conocer
              profundamente las Escrituras y servir mejor a la Iglesia.
            </p>
            <p className="mt-4 max-w-xl text-balance leading-relaxed text-cream/70">
              Formamos estudiantes, maestros, líderes, pastores y servidores
              mediante una propuesta que integra fidelidad bíblica, excelencia
              académica y una profunda vida espiritual.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/programas" variant="primary">
                Conocé nuestra oferta académica
              </Button>
              <Button href="/admision" variant="secondary">
                Quiero estudiar en INBREP
              </Button>
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
                &ldquo;Estudiar teología es aprender a interpretar
                responsablemente las Escrituras y prepararnos para servir a
                la Iglesia&rdquo;
              </p>
              <div className="mt-8 h-px w-full bg-white/10" />
              <p className="mt-8 text-sm leading-relaxed text-cream/70">
                Fidelidad bíblica, excelencia académica y profunda vida
                espiritual.
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

      {/* FORMACIÓN BÍBLICA Y TEOLÓGICA */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow>Nuestra propuesta</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Formación bíblica y teológica al servicio de la Iglesia
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Creemos que estudiar teología es mucho más que adquirir
          conocimientos. Es aprender a interpretar responsablemente las
          Escrituras, comprender aquello que creemos, crecer en nuestra
          relación con Dios y prepararnos para servir a la Iglesia y a
          nuestras comunidades. En INBREP queremos acompañarte en ese proceso
          mediante una formación accesible, sistemática y comprometida con la
          realidad de la iglesia local sudamericana.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UNA FORMACIÓN PARA VOS */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>A quién está dirigida</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl">
              Una formación para vos
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              INBREP está abierto a todas las personas que desean crecer en
              el conocimiento de la Biblia y la teología. No importa en qué
              etapa de tu camino te encuentres. Queremos ayudarte a seguir
              creciendo.
            </p>
            <div className="mt-7">
              <Button href="/admision" variant="ghost" className="border-ink/25 text-ink hover:border-ink/50 hover:bg-ink/5">
                Conocé los requisitos de admisión
              </Button>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {PERFILES.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-ink/15 bg-white/70 p-4 text-sm leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFERTA ACADÉMICA */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Diferentes trayectos</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Nuestra oferta académica
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Nuestra propuesta académica integra estudios bíblicos, teológicos y
          ministeriales mediante programas organizados progresivamente.
          Podés encontrar trayectos de formación en áreas como:
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink/15 bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-2"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TRAYECTOS.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 shadow-sm"
            >
              <span className="font-display text-4xl text-ink/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {t.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm font-semibold text-ember-dark">
          Planes desde 30 USD.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href="/programas" variant="primary">
            Explorá nuestra oferta académica
          </Button>
          <Button href="/admision" variant="ghost">
            Conocé los aranceles
          </Button>
        </div>
      </section>

      {/* ¿POR QUÉ ESTUDIAR EN INBREP? */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <Eyebrow tone="ember">Nuestra identidad</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            ¿Por qué estudiar en INBREP?
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RAZONES.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-ink/15 bg-white/70 p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink/15 bg-white/70 p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Diversidad teológica responsable
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Nuestro cuerpo docente está integrado por profesores de
                diferentes tradiciones del cristianismo protestante. Esta
                diversidad permite conocer distintas perspectivas, dialogar
                responsablemente y construir convicciones bajo la autoridad
                de las Escrituras.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/15 bg-white/70 p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Pentecostales e interdenominacionales
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Creemos que un verdadero renacer pentecostal está
                profundamente relacionado con el regreso a las Escrituras, la
                oración, la obra del Espíritu Santo, la santidad y la misión.
                Al mismo tiempo, somos una Comunidad Educativa
                Interdenominacional: participan profesores y estudiantes de
                diferentes tradiciones cristianas, aprendiendo a dialogar con
                fidelidad bíblica, humildad y amor cristiano.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/nosotros" variant="ghost">
              Conocé más sobre nosotros
            </Button>
          </div>
        </div>
      </section>

      {/* INBREP MÁS ALLÁ DEL AULA */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow>Nuestras iniciativas</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          INBREP más allá del aula
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Nuestra misión no termina en los programas académicos.
          Desarrollamos diferentes iniciativas para acompañar a personas,
          iglesias y comunidades.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {INICIATIVAS.map((it) => (
            <div
              key={it.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {it.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {it.desc}
              </p>
              <Link
                href={it.href}
                className="mt-6 text-sm font-semibold text-ember-dark hover:text-ember"
              >
                {it.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* COMUNIDAD Y NOVEDADES */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Una comunidad que trasciende las fronteras</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl">
              Conocé las novedades de INBREP
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              INBREP nació a partir del trabajo conjunto de pastores,
              teólogos, educadores, profesionales y plantadores de iglesias
              de Chile y Argentina. Hoy soñamos con convertirnos en una
              institución académica referente en el Cono Sur, contribuyendo
              al crecimiento de la Iglesia en toda Sudamérica.
            </p>
            <div className="mt-7">
              <Button href="/comunidad" variant="primary">
                Sumate a la Comunidad INBREP
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-ink/15 bg-white/70 p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink/60">
              Recibí información sobre
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              {NOVEDADES.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />
        <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Comenzá tu camino de formación
          </h2>
          <p className="max-w-xl text-balance leading-relaxed text-cream/75">
            No necesitás tener todos los conocimientos ni todas las
            respuestas para comenzar. Si deseás comprender más profundamente
            las Escrituras, fortalecer tu fe y prepararte para servir,
            queremos acompañarte.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admision" variant="primary">
              Quiero estudiar en INBREP
            </Button>
            <Button href="/admision" variant="secondary">
              Conocé el proceso de admisión
            </Button>
            <Button href="/contacto" variant="secondary">
              Contactanos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
