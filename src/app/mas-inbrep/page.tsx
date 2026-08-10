import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "+Inbrep",
  description:
    "Descargas, artículos y herramientas para tu crecimiento espiritual y ministerial.",
};

export default function MasInbrepPage() {
  return (
    <>
      <PageHero
        eyebrow="+Inbrep · Comunidad Inbrep"
        title="Recursos para tu crecimiento espiritual y ministerial"
        lead="Descargas, artículos y herramientas de formación: una versión gratuita para toda la comunidad y, más adelante, una versión con suscripción."
      />
      <PlaceholderSection
        tipWording="Ponemos a disposición recursos para tu crecimiento espiritual y ministerial."
        ctaLabel="Avisarme cuando esté disponible"
        blocks={[
          {
            title: "Guías de estudio",
            description: "Material para acompañar tu lectura bíblica y tu proceso formativo.",
          },
          {
            title: "Material devocional",
            description: "Contenido pensado para el crecimiento espiritual diario.",
          },
          {
            title: "Artículos académicos y publicaciones",
            description: "Producción teológica de nuestro equipo docente y colaboradores.",
          },
          {
            title: "Podcast y videos",
            description: "Contenido audiovisual y clases abiertas para toda la comunidad.",
          },
          {
            title: "Estudios bíblicos y clases gratuitas",
            description: "Recursos de acceso libre, disponibles para cualquier persona interesada.",
          },
        ]}
      />
    </>
  );
}
