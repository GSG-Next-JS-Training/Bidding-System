import { IUser, userModel } from "@/database/user-model";

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({email});
};

