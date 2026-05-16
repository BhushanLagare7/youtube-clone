"use client";

import { LoaderIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";

export const StudioUploadModal = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const create = useMutation(
    trpc.videos.create.mutationOptions({
      onError: () => {
        toast.error("Failed to create video");
      },
      onSuccess: () => {
        toast.success("Video created");
        queryClient.invalidateQueries({
          queryKey: trpc.studio.getMany.infiniteQueryKey({
            limit: DEFAULT_LIMIT,
          }),
        });
      },
    }),
  );

  return (
    <Button
      disabled={create.isPending}
      variant="secondary"
      onClick={() => create.mutate()}
    >
      {create.isPending ? (
        <LoaderIcon className="animate-spin" />
      ) : (
        <PlusIcon />
      )}
      Create
    </Button>
  );
};
