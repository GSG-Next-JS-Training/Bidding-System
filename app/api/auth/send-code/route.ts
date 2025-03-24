import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { verifyCode } from "@/modules/repositories/authRepository";

const verifyCodeHandler = async (req: NextRequest) => {
  const { email, code, password } = await req.json();

  await verifyCode(email, code, password);

  return NextResponse.json({ message: "Code verified successfully" }, { status: 200 });
};

export const POST = handlerWrapper(verifyCodeHandler);