import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HomeNavbar } from "@/modules/home/ui/components/home-navbar";
import { HomeSidebar } from "@/modules/home/ui/components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="w-full">
          <HomeNavbar />
          <div className="flex pt-16 min-h-screen">
            <HomeSidebar />
            <main className="overflow-y-auto flex-1">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};
