import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { forgotPassword } from "@/modules/repositories/authRepository";

const forgotPasswordHandler = async (req: NextRequest) => {
    const { email } = await req.json();
    await forgotPassword(email);
    return NextResponse.json({ message: "Reset code sent" }, { status: 200 });
  };

  export const POST = handlerWrapper(forgotPasswordHandler);