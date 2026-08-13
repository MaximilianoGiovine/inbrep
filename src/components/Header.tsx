"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, NAV_ITEMS_END, INICIATIVAS_ITEMS, PRIMARY_CTA } from "@/lib/nav";
import { WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [iniciativasOpen, setIniciativasOpen] = useState(false);
  const iniciativasRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setIniciativasOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!iniciativasOpen) return;
    function handlePointer(e: MouseEvent) {
      if (!iniciativasRef.current?.contains(e.target as Node)) {
        setIniciativasOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIniciativasOpen(false);
    }
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [iniciativasOpen]);

  const iniciativasActive = INICIATIVAS_ITEMS.some((item) =>
    pathname.startsWith(item.href)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-teal-dark/95 text-cream backdrop-blur supports-[backdrop-filter]:bg-teal-dark/90">
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

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/15 text-sun"
                    : "text-cream/80 hover:bg-white/5 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="relative" ref={iniciativasRef}>
            <button
              type="button"
              onClick={() => setIniciativasOpen((v) => !v)}
              aria-expanded={iniciativasOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1 rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
                iniciativasActive
                  ? "bg-white/15 text-sun"
                  : "text-cream/80 hover:bg-white/5 hover:text-cream"
              }`}
            >
              Iniciativas
              <svg
                viewBox="0 0 12 8"
                aria-hidden="true"
                className={`h-2.5 w-2.5 fill-current transition-transform ${
                  iniciativasOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </button>

            {iniciativasOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-teal-dark p-2 shadow-xl"
              >
                {INICIATIVAS_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setIniciativasOpen(false)}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-cream/90 transition-colors hover:bg-white/10 hover:text-sun"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS_END.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/15 text-sun"
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
            href={PRIMARY_CTA.href}
            className="rounded-full bg-ember-dark px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ember"
          >
            {PRIMARY_CTA.label}
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
        className={`grid overflow-hidden border-t border-white/10 bg-teal-dark transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
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
                    active ? "bg-white/15 text-sun" : "text-cream/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <span className="mt-3 px-3 text-xs font-semibold uppercase tracking-wider text-cream/50">
              Iniciativas
            </span>
            {INICIATIVAS_ITEMS.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active ? "bg-white/15 text-sun" : "text-cream/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <span className="mt-3 h-px bg-white/10" />

            {NAV_ITEMS_END.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active ? "bg-white/15 text-sun" : "text-cream/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={PRIMARY_CTA.href}
              className="mt-2 rounded-lg bg-ember-dark px-3 py-3 text-center text-base font-semibold text-cream"
            >
              {PRIMARY_CTA.label}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-3 py-3 text-center text-base font-semibold text-cream"
            >
              Hablar por WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
