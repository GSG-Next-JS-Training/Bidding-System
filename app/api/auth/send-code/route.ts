import { NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { verifyCode } from "@/modules/repositories/authRepository";

export const verifyCodeHandler = async (req: NextRequest) => {
  const { email, code, password } = await req.json();
  if (!email || !code || !password) {
    return NextResponse.json({ message: "Email, code and password are required" }, { status: 400 });
  }

  const isValid = await verifyCode(email, code, password);
  if (!isValid) {
    return NextResponse.json({ message: "Invalid code" }, { status: 400 });
  }

  return NextResponse.json({ message: "Code verified successfully" }, { status: 200 });
};

export const POST = handlerWrapper(verifyCodeHandler);