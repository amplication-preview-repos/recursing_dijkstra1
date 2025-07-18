import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  reportType?: "Option1";
  user?: UserWhereUniqueInput;
  video?: VideoWhereUniqueInput;
};
