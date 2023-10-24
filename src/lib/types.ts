export type DashboardConfig = {
  sideBarNav: SideBarNavItem[];
};

export type SideBarNavItem = {
  title: string;
  href: string;
  icon?: string;
};

export type SubmitHandler<T = any> = (data: T) => void;
