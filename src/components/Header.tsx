"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, VIRTUAL_ITEM } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur supports-[backdrop-filter]:bg-ink/90">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight sm:text-xl"
        >
          <Image
            src="/brand/isotipo-white.svg"
            alt=""
            width={28}
            height={34}
            className="h-8 w-auto shrink-0 sm:h-9"
            priority
          />
          <span className="leading-tight">
            INBREP
            <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.2em] text-cream/60">
              Instituto Bíblico Renacer Pentecostal
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-gold-light"
                    : "text-cream/80 hover:bg-white/5 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href={VIRTUAL_ITEM.href}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            {VIRTUAL_ITEM.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-white/10 bg-ink-2 transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active ? "bg-white/10 text-gold-light" : "text-cream/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={VIRTUAL_ITEM.href}
              className="mt-2 rounded-lg bg-gold px-3 py-3 text-center text-base font-semibold text-ink"
            >
              {VIRTUAL_ITEM.label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
