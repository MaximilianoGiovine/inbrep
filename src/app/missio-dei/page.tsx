import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "MissioDei",
  description: "Programa de acompañamiento al campo misionero. Próximamente.",
};

export default function MissioDeiPage() {
  return (
    <>
      <PageHero
        eyebrow="MissioDei · Próximamente"
        title="Un programa de acompañamiento al campo misionero"
        lead="MissioDei nace para sostener y acompañar a quienes sirven en el campo misionero, dentro y fuera de nuestras fronteras."
        tone="ember"
      />
      <PlaceholderSection
        ctaLabel="Quiero recibir más información"
        blocks={[
          {
            title: "Propósito y enfoque teológico",
            description: "La base bíblica y el enfoque que da forma a MissioDei.",
          },
          {
            title: "Historias del campo misionero",
            description: "Relatos e impacto de quienes ya están sirviendo en el campo.",
          },
          {
            title: "Proyectos activos",
            description: "El detalle de los proyectos misioneros que acompañamos.",
          },
          {
            title: "Cómo involucrarse",
            description: "Orar, enviar, ofrendar o servir: distintas formas de sumarte a MissioDei.",
          },
        ]}
      />
    </>
  );
}
