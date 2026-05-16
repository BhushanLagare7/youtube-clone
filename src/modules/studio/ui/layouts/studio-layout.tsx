import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StudioNavbar } from "@/modules/studio/ui/components/studio-navbar";
import { StudioSidebar } from "@/modules/studio/ui/components/studio-sidebar";

interface StudioLayoutProps {
  children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudioLayoutProps) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="w-full">
          <StudioNavbar />
          <div className="flex pt-16 min-h-screen">
            <StudioSidebar />
            <main className="overflow-y-auto flex-1">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};
