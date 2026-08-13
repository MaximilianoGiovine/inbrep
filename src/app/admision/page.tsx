import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admisión",
  description:
    "Requisitos, documentación, proceso de ingreso y aranceles para estudiar en el Instituto Bíblico Renacer Pentecostal.",
};

const REQUISITOS = [
  "Ser parte del cristianismo protestante y participar de una comunidad de fe.",
  "Contar con, al menos, un año de vida cristiana desde el bautismo.",
  "Conocer y aceptar la Declaración de Fe común de INBREP.",
  "Ser mayor de edad o haber completado la educación secundaria, lo que ocurra primero.",
  "Presentar una carta de recomendación pastoral.",
  "Completar el formulario de admisión y presentar la documentación solicitada.",
];

const DOCUMENTACION = [
  "Formulario de admisión completo.",
  "Documento de identidad: DNI, cédula o equivalente.",
  "Fotografía digital actual.",
  "Certificado de estudios primarios o secundarios, según corresponda.",
  "Carta de recomendación pastoral.",
  "Otros antecedentes que la institución pueda solicitar para evaluar una situación particular.",
];

const PROCESO = [
  {
    title: "Completá el formulario",
    desc: "Ingresá tus datos personales, académicos, eclesiales y ministeriales en el formulario de admisión.",
  },
  {
    title: "Enviá la documentación",
    desc: "Remití por correo electrónico los documentos solicitados, incluyendo la carta de recomendación pastoral.",
  },
  {
    title: "Esperá la evaluación",
    desc: "El equipo de INBREP revisará la postulación y podrá comunicarse con vos si necesita ampliar alguna información.",
  },
  {
    title: "Recibí la respuesta",
    desc: "Una vez finalizada la evaluación, recibirás la comunicación de aceptación o rechazo. Las personas aceptadas recibirán la carta de bienvenida y las indicaciones para continuar.",
  },
  {
    title: "Aboná la matrícula",
    desc: "La matrícula de 30 USD se abona únicamente después de recibir la aceptación.",
  },
  {
    title: "Comenzá tu formación",
    desc: "Luego de completar la matrícula recibirás la información académica, administrativa y tecnológica necesaria para incorporarte.",
  },
];

const ARANCELES = [
  { label: "Matrícula", value: "30 USD; se abona una sola vez y únicamente después de la aceptación" },
  { label: "Cuotas", value: "10 cuotas mensuales de 30 USD" },
  { label: "Período de cuotas", value: "Marzo a diciembre" },
  { label: "Descuento para matrimonios", value: "10% para cada integrante" },
  { label: "Descuento familiar", value: "10% para hermanos, padres e hijos; se aplica a cada integrante" },
];

const FAQ = [
  {
    q: "¿Necesito tener estudios teológicos previos?",
    a: "No. Nuestros programas están organizados para acompañar progresivamente a quienes comienzan y a quienes ya cuentan con experiencia previa.",
  },
  {
    q: "¿Debo pertenecer a una denominación específica?",
    a: "No. INBREP es una Comunidad Educativa Interdenominacional dentro del cristianismo protestante.",
  },
  {
    q: "¿Puedo ingresar si todavía no soy mayor de edad?",
    a: "Sí, si ya completaste la educación secundaria. Las situaciones particulares serán evaluadas individualmente.",
  },
  {
    q: "¿Por qué se solicita una carta pastoral?",
    a: "Porque valoramos la relación con la iglesia local y queremos conocer el contexto comunitario y ministerial del postulante.",
  },
  {
    q: "¿Puedo comenzar en cualquier momento del año?",
    a: "El ingreso puede realizarse al comienzo de cualquiera de los cinco bimestres, según la propuesta elegida y sus correlatividades. Recomendamos comenzar en marzo.",
  },
  {
    q: "¿Las clases son virtuales?",
    a: "Sí. La cursada regular es virtual y sincrónica, con clases en vivo por videoconferencia.",
  },
  {
    q: "¿Qué sucede si no puedo asistir a una clase?",
    a: "Cuando las condiciones del programa lo permiten, la clase puede quedar disponible en la plataforma académica para acompañar la continuidad del aprendizaje.",
  },
  {
    q: "¿Cuándo debo pagar la matrícula?",
    a: "Solamente después de que tu postulación haya sido aceptada.",
  },
  {
    q: "¿Existen descuentos familiares?",
    a: "Sí. Los matrimonios y los familiares directos —hermanos, padres e hijos— reciben un descuento del 10% para cada integrante.",
  },
  {
    q: "¿Cómo conozco el medio de pago disponible en mi país?",
    a: "Después de la aceptación, el equipo administrativo te enviará las instrucciones y los datos correspondientes.",
  },
];

export default function AdmisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Admisión"
        title="Tu formación puede comenzar acá"
        lead="Nuestro proceso de admisión busca conocer a cada postulante, acompañar su ingreso y confirmar que cuenta con las condiciones necesarias para aprovechar responsablemente la formación."
        tone="ember"
      />

      <section className="container-page py-16 sm:py-20">
        <p className="max-w-2xl leading-relaxed text-muted">
          INBREP es una Comunidad Educativa Cristiana Protestante e
          Interdenominacional. No esperamos que quienes ingresan tengan
          todas las respuestas ni una formación teológica previa. Buscamos
          personas dispuestas a aprender, crecer y comprometerse con su
          proceso académico y espiritual.
        </p>
        <div className="mt-6">
          <Button href="#inscripcion" variant="primary">
            Quiero inscribirme
          </Button>
        </div>

        {/* Requisitos y documentación */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Requisitos de ingreso
            </h2>
            <ul className="mt-5 space-y-3">
              {REQUISITOS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Las situaciones particulares y posibles excepciones
              curriculares serán evaluadas individualmente por la
              institución.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Documentación requerida
            </h2>
            <ul className="mt-5 space-y-3">
              {DOCUMENTACION.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-dark" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso de admisión */}
      <section className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>Paso a paso</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Proceso de admisión
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESO.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-ink/15 bg-white/70 p-6">
                <span className="font-display text-3xl text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/70">
            El año académico se organiza en cinco bimestres. Es posible
            ingresar al comienzo de cualquiera de ellos, siempre que la
            propuesta elegida y sus correlatividades lo permitan. Sin
            embargo, recomendamos comenzar en marzo para seguir el recorrido
            académico desde su inicio y aprovechar de manera más ordenada la
            progresión de las materias.
          </p>
        </div>
      </section>

      {/* Aranceles y becas */}
      <section className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Inversión</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Aranceles
        </h2>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {ARANCELES.map((a) => (
            <div key={a.label} className="bg-paper p-5">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {a.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-ink">{a.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
          Los importes se expresan en dólares estadounidenses como
          referencia institucional. Los medios y datos de pago disponibles
          para cada país se informarán al estudiante durante el proceso de
          ingreso.
        </p>

        <div className="mt-10 rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-ink">Becas</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            INBREP procura desarrollar oportunidades de beca para
            estudiantes que enfrentan dificultades económicas. Las becas son
            limitadas y dependen de los fondos aportados por benefactores y
            colaboradores. Cada solicitud será evaluada de acuerdo con la
            situación del postulante y la disponibilidad existente.
          </p>
          <div className="mt-5">
            <Button href="#inscripcion" variant="ghost">
              Quiero consultar por una beca
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page">
          <Eyebrow>Dudas frecuentes</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="inscripcion" className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Preinscripción</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Quiero inscribirme
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Completá tus datos y nuestro equipo se va a comunicar con vos para
          continuar el proceso de admisión.
        </p>
        <div className="mt-8 max-w-3xl rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm">
          <ContactForm subject="Preinscripción — Admisión INBREP" submitLabel="Enviar preinscripción" />
        </div>
        <p className="mt-6 text-sm text-muted">
          ¿Preferís una consulta directa?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-ember-dark hover:text-ember">
            Hablar por WhatsApp
          </a>
          .
        </p>
      </section>
    </>
  );
}
