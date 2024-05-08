import { ObjectId } from "mongoose";

export interface ICart {
  _id?: ObjectId;
  user?: ObjectId;
  cartItem?: ObjectId;
  quantity?: number;
  isDelete?: boolean;
}
