import { UserRoles } from "@/@types";

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    address: string;
    birthDate: Date;
    phoneNumber: string;
    confirmEmail: boolean;
    role: UserRoles;
  }