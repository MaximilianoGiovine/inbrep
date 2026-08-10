import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Consultas generales, invitaciones o postulaciones a INBREP.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        lead="Para consultas generales, invitaciones o postulaciones, este es tu punto de contacto con INBREP."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Correo
            </h3>
            <p className="mt-2 text-ink">info@inbrep.com</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Ubicación y horarios
            </h3>
            <p className="mt-2 text-ink">Modalidad 100% virtual — próximamente horarios de atención.</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Redes sociales
            </h3>
            <p className="mt-2 text-ink">Próximamente enlaces oficiales.</p>
          </div>
        </div>
      </section>

      <PlaceholderSection
        ctaLabel="Volver al inicio"
        ctaHref="/"
        blocks={[
          {
            title: "Formulario general de contacto",
            description: "Un canal directo para tus consultas, disponible próximamente en esta página.",
          },
          {
            title: "Trabajá con nosotros",
            description: "Postulaciones para docentes, voluntarios o personal administrativo.",
          },
        ]}
      />
    </>
  );
}
