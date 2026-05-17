import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { formatDuration } from "@/lib/utils";
import { THUMBNAIL_FALLBACK } from "@/modules/videos/constants";

interface VideoThumbnailProps {
  title: string;
  duration: number;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export const VideoThumbnailSkeleton = () => {
  return (
    <div className="overflow-hidden relative w-full rounded-xl aspect-video">
      <Skeleton className="size-full" />
    </div>
  );
};

export const VideoThumbnail = ({
  title,
  imageUrl,
  previewUrl,
  duration,
}: VideoThumbnailProps) => {
  return (
    <div className="relative group">
      {/* Thumbnail wrapper */}
      <div className="overflow-hidden relative w-full rounded-xl aspect-video">
        <Image
          alt={title}
          className="object-cover size-full group-hover:opacity-0"
          fill
          src={imageUrl ?? THUMBNAIL_FALLBACK}
        />
        <Image
          alt={title}
          className="object-cover opacity-0 size-full group-hover:opacity-100"
          fill
          src={previewUrl ?? THUMBNAIL_FALLBACK}
          unoptimized={!!previewUrl}
        />
      </div>

      {/* Video duration box */}
      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
