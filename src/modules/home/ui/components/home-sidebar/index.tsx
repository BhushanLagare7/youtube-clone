import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "@/modules/home/ui/components/home-sidebar/main-section";
import { PersonalSection } from "@/modules/home/ui/components/home-sidebar/personal-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="z-40 pt-16 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
