import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light shadow-[0_8px_24px_-8px_rgba(255,161,80,0.6)]",
  secondary:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-white/5",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:bg-ink/5",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
} & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
