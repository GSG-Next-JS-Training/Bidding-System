import { NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { loginUser } from "@/modules/repositories/authRepository";

const loginHandler = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  const { token } = await loginUser(email, password);
  return NextResponse.json({ message: token }, { status: 200 });
};

export const POST = handlerWrapper(loginHandler);
