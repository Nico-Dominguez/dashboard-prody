import {
  LayoutDashboard,
  FolderClosed,
  ChartNoAxesCombined,
  NotebookText,
  Puzzle,
  Box,
  SquareUserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import { AppCommand, Command } from "./app-command";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderClosed,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Reports",
    url: "#",
    icon: NotebookText,
  },
  {
    title: "Extensions",
    url: "#",
    icon: Puzzle,
  },
];

const smeti = [
  {
    title: "Companies",
    url: "#",
    icon: Box,
  },
  {
    title: "People",
    url: "#",
    icon: SquareUserRound,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-black font-bold mb-4">
            Prody
          </SidebarGroupLabel>
          <AppCommand />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          {/* break */}
          <Separator className="my-2" />

          <SidebarGroupContent className="">
            <SidebarMenu>
              {smeti.map((meti) => (
                <SidebarMenuItem key={meti.title}>
                  <SidebarMenuButton asChild>
                    <a href={meti.url}>
                      <meti.icon />
                      <span>{meti.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
