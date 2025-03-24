import { NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { loginUser } from "@/modules/repositories/authRepository";
import { cookies } from "next/headers";

const loginHandler = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  const { token } = await loginUser(email, password);
  (await cookies()).set('auth-token', token, {
    httpOnly : true,
    secure : process.env.NODE_ENV === 'production',
    maxAge : 3600
  });
  return NextResponse.json({ message: token }, { status: 200 });
};

export const POST = handlerWrapper(loginHandler);