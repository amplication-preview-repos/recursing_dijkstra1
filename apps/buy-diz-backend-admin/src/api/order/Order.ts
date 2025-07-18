import { Product } from "../product/Product";

export type Order = {
  amount: number | null;
  client: string | null;
  createdAt: Date;
  escrowReleased: boolean | null;
  id: string;
  product?: Product | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
