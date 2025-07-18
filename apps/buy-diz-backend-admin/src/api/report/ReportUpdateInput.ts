import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ReportUpdateInput = {
  reason?: string | null;
  reportType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  video?: VideoWhereUniqueInput | null;
};
