import {  NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { loginUser } from "@/modules/repositories/authRepository";
import { connection } from "@/lib/mongodb";


const postHandler = async (req: NextRequest) => {
  await connection();
  const body = await req.json();
  const { email, password } = body;
  const { token, user } = await loginUser(email, password);

  return NextResponse.json({ token, user }, { status: 200 });
};



export const POST = handlerWrapper(postHandler);

