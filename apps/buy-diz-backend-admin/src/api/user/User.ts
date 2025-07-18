import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Notification } from "../notification/Notification";
import { Report } from "../report/Report";
import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type User = {
  clientProfile: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  notifications?: Array<Notification>;
  phone: string | null;
  reports?: Array<Report>;
  retailerProfile: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
