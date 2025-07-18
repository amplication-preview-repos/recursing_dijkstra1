import { User } from "../user/User";
import { Video } from "../video/Video";

export type Report = {
  createdAt: Date;
  id: string;
  reason: string | null;
  reportType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  video?: Video | null;
};
