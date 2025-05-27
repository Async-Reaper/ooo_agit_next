import { IUser } from "@entities/User";

export interface AddUserType extends IUser {
  password: string;
}
