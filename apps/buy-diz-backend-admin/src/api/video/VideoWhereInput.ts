import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type VideoWhereInput = {
  caption?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  product?: ProductWhereUniqueInput;
  reports?: ReportListRelationFilter;
  retailer?: StringNullableFilter;
  thumbnailUrl?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
