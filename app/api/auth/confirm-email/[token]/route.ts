import { confirmEmail } from "@/modules/repositories/userRepository";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { token: string } }
) => {
  const { token } = await params;
  await confirmEmail(token);
  return NextResponse.redirect(new URL("/login", req.url));
};
