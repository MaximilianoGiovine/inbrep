import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas generales, admisión, EBL, MissioDei, donaciones o postulaciones a INBREP.",
};

const MOTIVOS = [
  "Oferta académica y admisión",
  "Implementar EBL en mi iglesia",
  "Colaborar con MissioDei",
  "Apoyar a INBREP (donaciones)",
  "Consulta general",
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        lead="Si querés conocer nuestros programas, comenzar el proceso de admisión, implementar EBL, colaborar con MissioDei, apoyar a INBREP o realizar una consulta general, completá el formulario y nuestro equipo se comunicará con vos."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap gap-3">
          <Button href="#formulario" variant="primary">
            Enviar mi consulta
          </Button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-ink/50 hover:bg-ink/5"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">Correo</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 block text-sm text-muted hover:text-ember-dark"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">WhatsApp</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-muted hover:text-ember-dark"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">Modalidad</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              100% virtual · Chile · Sudamérica · Hispanoamérica
            </p>
          </div>
        </div>

        <div id="formulario" className="mt-14 max-w-3xl rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Formulario de contacto
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Completá tus datos y contanos el motivo de tu consulta.
          </p>
          <div className="mt-6">
            <ContactForm
              subject="Consulta general — INBREP"
              submitLabel="Enviar mi consulta"
              motivoOptions={MOTIVOS}
            />
          </div>
        </div>
      </section>
    </>
  );
}
