import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  amount?: number | null;
  client?: string | null;
  escrowReleased?: boolean | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
};
