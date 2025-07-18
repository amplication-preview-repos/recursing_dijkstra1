import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  amount?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  escrowReleased?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
