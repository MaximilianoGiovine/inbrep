import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "Donar",
  description: "Tu generosidad impulsa la formación de nuevos obreros para el Reino.",
};

export default function DonarPage() {
  return (
    <>
      <PageHero
        eyebrow="Donar"
        title="Tu generosidad impulsa la formación de nuevos obreros"
        lead="Un canal transparente de sostenimiento y apoyo para que sigamos formando obreros fieles para la obra del Señor."
        tone="ember"
      />
      <PlaceholderSection
        tipWording="Tu generosidad impulsa la formación de nuevos obreros para el Reino."
        ctaLabel="Quiero donar"
        blocks={[
          {
            title: "Por qué donar",
            description: "La visión y el propósito del fondo que sostiene a INBREP.",
          },
          {
            title: "Medios de donación",
            description: "Transferencia, PayPal, MercadoPago y otros medios, próximamente disponibles.",
          },
          {
            title: "Testimonios de impacto",
            description: "Historias de cómo las donaciones transforman la formación de nuestros estudiantes.",
          },
          {
            title: "Transparencia y reportes",
            description: "Información e informes anuales sobre el uso de las donaciones recibidas.",
          },
        ]}
      />
    </>
  );
}
