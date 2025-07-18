import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  caption?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  retailer?: SortOrder;
  thumbnailUrl?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
