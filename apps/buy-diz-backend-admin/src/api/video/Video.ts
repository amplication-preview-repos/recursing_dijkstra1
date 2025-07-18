import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Product } from "../product/Product";
import { Report } from "../report/Report";

export type Video = {
  caption: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  product?: Product | null;
  reports?: Array<Report>;
  retailer: string | null;
  thumbnailUrl: string | null;
  updatedAt: Date;
  videoUrl: string | null;
};
