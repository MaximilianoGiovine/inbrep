import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Inbrep Virtual",
  description: "Acceso directo a la plataforma académica de INBREP.",
};

export default function VirtualPage() {
  return (
    <>
      <PageHero
        eyebrow="Inbrep Virtual"
        title="Tu plataforma académica"
        lead="Accedé a tus clases sincrónicas, contenido on-demand y materiales de estudio desde un mismo lugar."
      />
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-3xl border border-ink/10 bg-paper p-10 text-center shadow-sm">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 font-display text-xl font-bold text-gold-dark">
            IB
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Acceso a la plataforma
          </h2>
          <p className="leading-relaxed text-muted">
            El enlace de acceso a la plataforma académica (Canvas) se va a
            habilitar en esta sección una vez esté disponible.
          </p>
          <Button href="/contacto" variant="primary">
            Consultar por mi acceso
          </Button>
        </div>
      </section>
    </>
  );
}
