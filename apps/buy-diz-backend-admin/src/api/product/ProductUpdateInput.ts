import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { VideoUpdateManyWithoutProductsInput } from "./VideoUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  retailer?: string | null;
  videos?: VideoUpdateManyWithoutProductsInput;
};
