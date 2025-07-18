import { User } from "../user/User";

export type Notification = {
  body: string | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
