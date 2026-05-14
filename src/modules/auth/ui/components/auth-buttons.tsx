import { UserCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <Button
      className="px-4 py-2 text-sm font-medium text-blue-600 rounded-full shadow-none hover:text-blue-500 border-blue-500/20"
      variant="outline"
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};
