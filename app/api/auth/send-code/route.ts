import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { verifyCode } from "@/modules/repositories/authRepository";

const verifyCodeHandler = async (req: NextRequest) => {
  const body = await req.json();
  const { email, code } = body;

  await verifyCode(email, code);
  return NextResponse.json({ message: "Code verified successfully" }, { status: 200 });
};

export const POST = handlerWrapper(verifyCodeHandler);