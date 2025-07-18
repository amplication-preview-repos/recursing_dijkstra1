import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  videoId?: SortOrder;
};
