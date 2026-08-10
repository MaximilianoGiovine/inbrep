export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Programas", href: "/programas" },
  { label: "Admisión", href: "/admision" },
  { label: "+Inbrep", href: "/mas-inbrep" },
  { label: "MissioDei", href: "/missio-dei" },
  { label: "EBL", href: "/ebl" },
  { label: "Donar", href: "/donar" },
  { label: "Contacto", href: "/contacto" },
];

export const VIRTUAL_ITEM: NavItem = {
  label: "Inbrep Virtual",
  href: "/virtual",
};
