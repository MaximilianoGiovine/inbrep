import Button from "./Button";

export type PlaceholderBlock = {
  title: string;
  description: string;
};

export default function PlaceholderSection({
  tipWording,
  blocks,
  ctaLabel,
  ctaHref = "/contacto",
}: {
  tipWording?: string;
  blocks: PlaceholderBlock[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      {tipWording && (
        <blockquote className="mx-auto mb-14 max-w-2xl text-balance text-center font-display text-2xl italic leading-snug text-ink-2 sm:text-3xl">
          &ldquo;{tipWording}&rdquo;
        </blockquote>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted">
                Próximamente
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {block.description}
            </p>
          </div>
        ))}
      </div>

      {ctaLabel && (
        <div className="mt-12 flex justify-center">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      )}
    </section>
  );
}
