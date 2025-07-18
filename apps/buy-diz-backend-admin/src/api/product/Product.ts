import { Order } from "../order/Order";
import { Video } from "../video/Video";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  retailer: string | null;
  updatedAt: Date;
  videos?: Array<Video>;
};
