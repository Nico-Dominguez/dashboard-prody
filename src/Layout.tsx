import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AppMain from "./components/app-main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0 w-full">
          <header className="sticky top-0 z-10 bg-white border-b px-4 h-16 flex items-center">
            <SidebarTrigger />
          </header>

          <main className="flex-1 overflow-y-auto w-full">
            <AppMain />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
