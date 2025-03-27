import { NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { resetPassword } from "@/modules/repositories/authRepository";

const resetPasswordHandler = async (req : NextRequest) => {
    const body = await req.json();
    const {email, newPassword} = body;

    resetPassword(email, newPassword);
    return NextResponse.json({message: "Password reset successfully"}, {status: 200});
}

export const POST = handlerWrapper(resetPasswordHandler);