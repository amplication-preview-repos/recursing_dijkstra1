import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "retailer";

export const VideoTitle = (record: TVideo): string => {
  return record.retailer?.toString() || String(record.id);
};
