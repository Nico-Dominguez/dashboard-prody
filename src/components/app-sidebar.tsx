import {
  LayoutDashboard,
  FolderClosed,
  ChartNoAxesCombined,
  NotebookText,
  Puzzle,
  Box,
  SquareUserRound,
  CircleHelp,
  Bell,
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
import { AppAvatar } from "./app-avatar";

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
        <SidebarGroup className="flex flex-col h-full">
          <SidebarGroupLabel className="text-xl text-black font-bold mb-2">
            Prody
          </SidebarGroupLabel>
          <AppCommand />
          <SidebarGroupContent className="">
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
          <Separator />

          <SidebarGroupContent className="grow ">
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

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <CircleHelp />
                    <span>Help Center</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Bell />
                    <span>Notifications</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <Separator />

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton>
                <a href="#" className="flex items-center justify-between">
                  <AppAvatar />
                  <span>Ember Crest</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>

          <div className="my-4 p-1 bg-white rounded-lg shadow-sm border text-center">
            <h3 className="text-sm font-bold text-center">
              Starter set overview
            </h3>
            <p className="text-xs text-gray-300">3 of 5 projects created</p>
            <div className="flex justify-between items-center w-full mt-2 mb-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className={`text-xl ${item > 3 ? "opacity-30" : ""}`}
                >
                  📁
                </span>
              ))}
            </div>
            <a
              href="#"
              className="block w-full hover:bg-gray-100 p-2 border shadow rounded-lg flex items-center justify-center gap-2"
            >
              <span className="text-base font-bold">Get full access</span>
              <span>🚀</span>
            </a>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
