import { UserRoles } from "@/@types";
export interface LoginResponse {
  token: string;
  userType: UserRoles;
  userId:string;
  userName:string;
}