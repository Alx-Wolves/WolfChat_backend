import { Request } from "express";

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface UserRequest extends Request {
  user?: User;
}
