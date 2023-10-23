import type { SideBarNavItem } from "@/lib/types";

export type DashboardConfig = {
  sideBarNav: SideBarNavItem[];
};

const dashboardConfig: DashboardConfig = {
  sideBarNav: [
    {
      title: "board",
      href: "/board",
      icon: "board-icon",
    },
  ],
};
