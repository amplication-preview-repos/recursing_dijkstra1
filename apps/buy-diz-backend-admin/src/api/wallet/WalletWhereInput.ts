import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  escrowBalance?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
