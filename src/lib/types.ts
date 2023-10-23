export type DashboardConfig = {
  sideBarNav: SideBarNavItem[];
};

export type SideBarNavItem = {
  title: string;
  href: string;
  icon?: string;
};
