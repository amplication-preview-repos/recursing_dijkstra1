import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  title?: StringNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
