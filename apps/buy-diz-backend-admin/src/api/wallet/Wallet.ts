import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  escrowBalance: number | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
