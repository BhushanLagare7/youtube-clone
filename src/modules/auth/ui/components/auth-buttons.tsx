"use client";

import { UserCircleIcon } from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  return (
    <>
      <Show when="signed-in">
        <UserButton />
        {/* TODO: Add menu items for Studio and User profile */}
      </Show>

      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button
            className="px-4 py-2 text-sm font-medium text-blue-600 rounded-full shadow-none hover:text-blue-500 border-blue-500/20"
            variant="outline"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </Show>
    </>
  );
};
