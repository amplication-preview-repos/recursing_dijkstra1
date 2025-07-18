import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  escrowBalance?: number | null;
  user?: UserWhereUniqueInput | null;
};
