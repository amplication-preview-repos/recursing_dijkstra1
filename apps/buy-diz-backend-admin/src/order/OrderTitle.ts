import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "client";

export const OrderTitle = (record: TOrder): string => {
  return record.client?.toString() || String(record.id);
};
