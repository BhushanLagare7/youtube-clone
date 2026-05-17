import { UploadIcon } from "lucide-react";
import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";

import { Button } from "@/components/ui/button";

interface StudioUploaderProps {
  endpoint?: string | null;
  onSuccess: () => void;
}

const UPLOADER_ID = "video-uploader";

export const StudioUploader = ({
  endpoint,
  onSuccess,
}: StudioUploaderProps) => {
  return (
    <div>
      <MuxUploader
        className="hidden group/uploader"
        endpoint={endpoint}
        id={UPLOADER_ID}
        onSuccess={onSuccess}
      />
      <MuxUploaderDrop className="group/drop" muxUploader={UPLOADER_ID}>
        <div className="flex flex-col gap-6 items-center" slot="heading">
          <div className="flex gap-2 justify-center items-center rounded-full size-32 bg-muted">
            <UploadIcon className="size-10 text-muted-foreground group/drop-[&[active]]:animate-bounce transition-all duration-300" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm">Drag and drop video files to upload</p>
            <p className="text-xs text-muted-foreground">
              Your videos will be private until you publish them
            </p>
          </div>
          <MuxUploaderFileSelect muxUploader={UPLOADER_ID}>
            <Button className="rounded-full" type="button">
              Select files
            </Button>
          </MuxUploaderFileSelect>
        </div>
        <span className="hidden" slot="separator" />
        <MuxUploaderStatus className="text-sm" muxUploader={UPLOADER_ID} />
        <MuxUploaderProgress
          className="text-sm"
          muxUploader={UPLOADER_ID}
          type="percentage"
        />
        <MuxUploaderProgress muxUploader={UPLOADER_ID} type="bar" />
      </MuxUploaderDrop>
    </div>
  );
};
