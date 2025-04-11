import { handlerWrapper } from "@/lib/apiHandler";
import { addUser } from "@/modules/repositories/userRepository";
import { retrieveUsers } from "@/modules/services/userServices";
import { NextRequest, NextResponse } from "next/server";

const addUserHandler = async (req: NextRequest) => {
  const body = await req.json();
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");

  const user = await addUser(body, protocol, host);
  return NextResponse.json(user, { status: 200 });
};

const getUsers = async () => {
  const users = await retrieveUsers();
  return NextResponse.json(users, { status: 200 });
};

export const POST = handlerWrapper(addUserHandler);
export const GET = handlerWrapper(getUsers);
