export const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLERS", href: "/best-sellers" },
  { name: "ALL PRODUCTS", href: "/all-products" },
] as const; // Use 'as const' for better TypeScript type inference
