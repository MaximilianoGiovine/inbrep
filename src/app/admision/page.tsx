import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderSection from "@/components/PlaceholderSection";

export const metadata: Metadata = {
  title: "Admisión",
  description: "Prepará tu ingreso a INBREP y comenzá tu formación con nosotros.",
};

export default function AdmisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Admisión"
        title="Prepará tu ingreso a INBREP"
        lead="Te guiamos paso a paso en el proceso de ingreso, para que comiences tu formación con nosotros con total claridad."
        tone="ember"
      />
      <PlaceholderSection
        tipWording="Prepará tu ingreso a INBREP y comenzá tu formación con nosotros."
        ctaLabel="Consultar por el proceso de admisión"
        blocks={[
          {
            title: "Requisitos de ingreso",
            description:
              "El detalle de la documentación y condiciones necesarias para inscribirte se va a publicar en esta sección.",
          },
          {
            title: "Proceso paso a paso",
            description:
              "Una guía clara del recorrido de admisión, desde la preinscripción hasta la confirmación del cupo.",
          },
          {
            title: "Medios de pago",
            description:
              "Opciones nacionales (método chileno) e internacionales, incluida Argentina y otros países de la región.",
          },
          {
            title: "Formulario de preinscripción",
            description:
              "Botón de inscripción directa: “Inscribirme ahora”. Muy pronto disponible en esta sección.",
          },
          {
            title: "Preguntas frecuentes",
            description:
              "Respuestas a las dudas más comunes sobre el proceso, la modalidad virtual y los programas.",
          },
        ]}
      />
    </>
  );
}
