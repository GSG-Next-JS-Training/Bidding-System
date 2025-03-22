import { IUser, userModel } from "@/database/user-model";

export const findUserByEmail = async (email: string): Promise<IUser> => {
  const user = await userModel.findOne({ email });
  return user;
};
