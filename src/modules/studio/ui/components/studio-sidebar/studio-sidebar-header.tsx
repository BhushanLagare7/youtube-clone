"use client";

import Link from "next/link";

import { useUser } from "@clerk/nextjs";

import {
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";

export const StudioSidebarHeader = () => {
  const { user } = useUser();
  const { state } = useSidebar();

  if (!user) {
    return (
      <SidebarHeader className="flex justify-center items-center pb-4">
        <Skeleton className="rounded-full size-28" />
        <div className="flex flex-col gap-y-1 items-center mt-2">
          <Skeleton className="w-20 h-5" />
          <Skeleton className="h-4 w-25" />
        </div>
      </SidebarHeader>
    );
  }

  if (state === "collapsed") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild tooltip="Your Profile">
          <Link href="/users/current">
            <UserAvatar
              imageUrl={user.imageUrl}
              name={user.fullName ?? "User"}
              size="xs"
            />
            <span className="text-sm">Your Profile</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarHeader className="flex justify-center items-center pb-4">
      <Link href="/users/current">
        <UserAvatar
          className="transition-opacity size-28 hover:opacity-80"
          imageUrl={user.imageUrl}
          name={user.fullName ?? "User"}
        />
      </Link>
      <div className="flex flex-col gap-y-1 items-center mt-2">
        <p className="text-sm font-medium">Your Profile</p>
        <p className="text-xs text-muted-foreground">{user.fullName}</p>
      </div>
    </SidebarHeader>
  );
};
