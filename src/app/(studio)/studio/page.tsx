import { DEFAULT_LIMIT } from "@/constants";
import { StudioView } from "@/modules/studio/ui/views/studio-view";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

const StudioPage = async () => {
  prefetch(
    trpc.studio.getMany.infiniteQueryOptions(
      { limit: DEFAULT_LIMIT },
      { getNextPageParam: (lastPage) => lastPage.nextCursor },
    ),
  );

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};

export default StudioPage;
