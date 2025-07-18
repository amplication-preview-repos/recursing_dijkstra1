import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  clientProfile?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  notifications?: NotificationListRelationFilter;
  phone?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  retailerProfile?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
