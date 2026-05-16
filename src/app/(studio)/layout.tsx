import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";

interface StudioLayoutWrapperProps {
  children: React.ReactNode;
}

const StudioLayoutWrapper = ({ children }: StudioLayoutWrapperProps) => {
  return <StudioLayout>{children}</StudioLayout>;
};

export default StudioLayoutWrapper;
