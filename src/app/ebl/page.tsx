import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "Programa EBL",
  description: "Escuela Bíblica Local: acompañamiento para la iglesia local.",
};

export default function EblPage() {
  return (
    <>
      <PageHero
        eyebrow="Programa EBL"
        title="Escuela Bíblica Local"
        lead="Un programa de acompañamiento pensado para fortalecer la formación bíblica dentro de la iglesia local."
      />
      <PlaceholderSection
        ctaLabel="Quiero que mi iglesia participe"
        blocks={[
          {
            title: "Qué es el programa EBL",
            description: "Una introducción al modelo de acompañamiento para la iglesia local.",
          },
          {
            title: "Objetivos y beneficios",
            description: "Qué gana la iglesia local al sumarse al programa EBL.",
          },
          {
            title: "Cómo participar",
            description: "El formulario de contacto para iniciar el proceso va a estar disponible acá.",
          },
          {
            title: "Testimonios de pastores",
            description: "Experiencias de pastores que ya implementaron EBL en su congregación.",
          },
        ]}
      />
    </>
  );
}
