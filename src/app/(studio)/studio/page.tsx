import { DEFAULT_LIMIT } from "@/constants";
import { VideosSection } from "@/modules/studio/ui/sections/videos-section";
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
      <VideosSection />
    </HydrateClient>
  );
};

export default StudioPage;
