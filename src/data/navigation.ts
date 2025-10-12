export interface NavItem {
  key: string;
  href: string;
  isRoute: boolean;
  sectionId?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '#hero', isRoute: false, sectionId: 'hero' },
  { key: 'nav_brands', href: '#brands', isRoute: false, sectionId: 'brands' },
  { key: 'nav_services', href: '#services', isRoute: false, sectionId: 'services' },
  { key: 'location', href: '#location', isRoute: false, sectionId: 'location' },
  { key: 'contact', href: '#contact', isRoute: false, sectionId: 'contact' },
  { key: 'dining', href: '/dining', isRoute: true },
  { key: 'cafes', href: '/cafes', isRoute: true },
  { key: 'about_us', href: '/about', isRoute: true },
];