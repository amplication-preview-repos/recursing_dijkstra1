import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  client?: StringNullableFilter;
  escrowReleased?: BooleanNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  status?: "Option1";
};
