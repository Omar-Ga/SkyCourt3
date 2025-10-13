export interface NavItem {
  key: string;
  href: string;
  isRoute: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '/', isRoute: true },
  { key: 'nav_brands', href: '#brands', isRoute: false },
  { key: 'nav_services', href: '#services', isRoute: false },
  { key: 'dining', href: '/dining', isRoute: true },
  { key: 'location', href: '#location', isRoute: false },
  { key: 'contact', href: '#contact', isRoute: false },
];