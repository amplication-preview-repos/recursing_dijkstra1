import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  escrowBalance?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
