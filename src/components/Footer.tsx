import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, VIRTUAL_ITEM } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-cream">
      <div className="container-page grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-display text-xl font-extrabold">
            <Image
              src="/brand/isotipo-white.svg"
              alt="INBREP"
              width={28}
              height={34}
              className="h-8 w-auto shrink-0"
            />
            INBREP
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Instituto Bíblico Renacer Pentecostal. Formando obreros fieles para
            la obra del Señor, con excelencia académica y profunda vida
            espiritual, de forma virtual para toda Chile, Sudamérica y la
            América hispanohablante.
          </p>
          <p className="mt-5 font-display text-base italic text-sun">
            &ldquo;Crecemos en su Palabra con el poder de su Espíritu&rdquo;
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sun">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sun">
            Comunidad
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {NAV_ITEMS.slice(5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={VIRTUAL_ITEM.href} className="hover:text-cream">
                {VIRTUAL_ITEM.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sun">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li>info@inbrep.com</li>
            <li>Modalidad 100% virtual</li>
            <li>Chile · Sudamérica · Hispanoamérica</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} INBREP — Instituto Bíblico Renacer Pentecostal.</p>
          <p>Sitio en construcción · contenido preliminar</p>
        </div>
      </div>
    </footer>
  );
}
