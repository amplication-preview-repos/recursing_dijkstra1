import { CommentUpdateManyWithoutVideosInput } from "./CommentUpdateManyWithoutVideosInput";
import { LikeUpdateManyWithoutVideosInput } from "./LikeUpdateManyWithoutVideosInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ReportUpdateManyWithoutVideosInput } from "./ReportUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  caption?: string | null;
  comments?: CommentUpdateManyWithoutVideosInput;
  likes?: LikeUpdateManyWithoutVideosInput;
  product?: ProductWhereUniqueInput | null;
  reports?: ReportUpdateManyWithoutVideosInput;
  retailer?: string | null;
  thumbnailUrl?: string | null;
  videoUrl?: string | null;
};
