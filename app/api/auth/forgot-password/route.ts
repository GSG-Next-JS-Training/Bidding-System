import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { forgotPassword } from "@/modules/repositories/authRepository";

const forgotPasswordHandler = async (req: NextRequest) => {
  const body = await req.json();
  const { email } = body;
  await forgotPassword(email);
  return NextResponse.json({ message: "Reset code sent" , email:email}, { status: 200 });
  };

  export const POST = handlerWrapper(forgotPasswordHandler);