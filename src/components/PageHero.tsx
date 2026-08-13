import Eyebrow from "./Eyebrow";

export default function PageHero({
  eyebrow,
  title,
  lead,
  tone = "gold",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: "gold" | "ember";
}) {
  return (
    <section className="bg-grain relative overflow-hidden bg-teal-dark text-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            tone === "gold"
              ? "radial-gradient(circle, rgba(255,161,80,0.35), transparent 70%)"
              : "radial-gradient(circle, rgba(251,64,47,0.4), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background: "radial-gradient(circle, rgba(0,147,160,0.28), transparent 70%)",
        }}
      />
      <div className="container-page relative py-20 sm:py-24">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-cream/75">
          {lead}
        </p>
      </div>
    </section>
  );
}
