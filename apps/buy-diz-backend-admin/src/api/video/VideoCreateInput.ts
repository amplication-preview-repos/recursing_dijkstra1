import { CommentCreateNestedManyWithoutVideosInput } from "./CommentCreateNestedManyWithoutVideosInput";
import { LikeCreateNestedManyWithoutVideosInput } from "./LikeCreateNestedManyWithoutVideosInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ReportCreateNestedManyWithoutVideosInput } from "./ReportCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  caption?: string | null;
  comments?: CommentCreateNestedManyWithoutVideosInput;
  likes?: LikeCreateNestedManyWithoutVideosInput;
  product?: ProductWhereUniqueInput | null;
  reports?: ReportCreateNestedManyWithoutVideosInput;
  retailer?: string | null;
  thumbnailUrl?: string | null;
  videoUrl?: string | null;
};
