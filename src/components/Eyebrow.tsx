export default function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ember";
}) {
  const color = tone === "gold" ? "text-gold-dark bg-gold/10" : "text-ember bg-ember/10";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
