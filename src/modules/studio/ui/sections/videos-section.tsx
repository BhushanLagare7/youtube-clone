"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";

export const VideosSection = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseInfiniteQuery(
    trpc.studio.getMany.infiniteQueryOptions(
      { limit: DEFAULT_LIMIT },
      { getNextPageParam: (lastPage) => lastPage.nextCursor },
    ),
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
