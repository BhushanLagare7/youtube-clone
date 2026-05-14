import Image from "next/image";
import Link from "next/link";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/ui/components/auth-buttons";
import { SearchInput } from "@/modules/home/ui/components/home-navbar/search-input";

export const HomeNavbar = () => {
  return (
    <nav className="flex fixed top-0 right-0 left-0 z-50 items-center px-2 pr-5 h-16 bg-white">
      <div className="flex gap-4 items-center w-full">
        {/* Menu and Logo */}
        <div className="flex items-center shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex gap-1 items-center p-4">
              <Image alt="Logo" height={32} src="/logo.svg" width={32} />
              <p className="text-xl font-semibold tracking-tight">YouTube</p>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 justify-center mx-auto max-w-180">
          <SearchInput />
        </div>

        <div className="flex gap-4 items-center shrink-0">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
