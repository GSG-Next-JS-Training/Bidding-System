import { IUser, userModel } from "@/database/user-model";

export const createUser = async (body: Partial<IUser>): Promise<IUser> => {
  const user = await userModel.create(body);
  return user;
};

export const updateConfirmEmailRecord = async (email: string | unknown) => {
  const user = await userModel.findOneAndUpdate(
    { email, confirmEmail: false },
    { confirmEmail: true }
  );
  return user;
};

export const retrieveUsers = async () => {
  const users = await userModel.find({});
  return users;
};
