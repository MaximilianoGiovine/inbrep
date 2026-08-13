export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Oferta académica", href: "/programas" },
  { label: "Admisión", href: "/admision" },
];

export const INICIATIVAS_ITEMS: NavItem[] = [
  { label: "+INBREP", href: "/mas-inbrep" },
  { label: "MissioDei", href: "/missio-dei" },
  { label: "EBL — Escuela Bíblica Local", href: "/ebl" },
];

export const NAV_ITEMS_END: NavItem[] = [
  { label: "Comunidad", href: "/comunidad" },
  { label: "Donar", href: "/donar" },
  { label: "Contacto", href: "/contacto" },
];

export const PRIMARY_CTA: NavItem = {
  label: "Quiero estudiar",
  href: "/admision",
};
