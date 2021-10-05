import { Timestamp } from "firebase/firestore";

export interface Entity {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
