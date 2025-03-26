import { cookies } from "next/headers";
import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/modules/repositories/authRepository";

const loginHandler = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  const { token } = await loginUser(email, password);
  (await cookies()).set('auth-token', token, {
    httpOnly : true,
    secure : process.env.NODE_ENV === 'production',
    maxAge : 86400
  });
  return NextResponse.json({token}, { status: 200 });
};

export const POST = handlerWrapper(loginHandler);