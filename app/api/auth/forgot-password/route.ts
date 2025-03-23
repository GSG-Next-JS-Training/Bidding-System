import { handlerWrapper } from "@/lib/apiHandler";
import { forgotPassword } from "@/modules/repositories/authRepository";
import { NextRequest, NextResponse } from "next/server";

export const forgotPasswordHandler = async (req: NextRequest) => {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
  
    await forgotPassword(email);
    return NextResponse.json({ message: "Reset code sent" }, { status: 200 });
  };

  export const POST = handlerWrapper(forgotPasswordHandler);