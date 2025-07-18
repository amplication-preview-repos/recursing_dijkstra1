import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { VideoCreateNestedManyWithoutProductsInput } from "./VideoCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  retailer?: string | null;
  videos?: VideoCreateNestedManyWithoutProductsInput;
};
