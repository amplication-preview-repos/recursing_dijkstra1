import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  body?: string | null;
  isRead?: boolean | null;
  title?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
