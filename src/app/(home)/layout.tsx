import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

interface HomeLayoutWrapperProps {
  children: React.ReactNode;
}

const HomeLayoutWrapper = ({ children }: HomeLayoutWrapperProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default HomeLayoutWrapper;
