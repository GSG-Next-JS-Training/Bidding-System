// utils/handlerWrapper.ts
import { NextRequest, NextResponse } from "next/server";

type Handler = (req: NextRequest, res: NextResponse) => Promise<any>;

export const handlerWrapper = (handler: Handler) => {
  return async (req: NextRequest, res: NextResponse) => {
    try {
      return await handler(req, res); // Call the actual handler
    } catch (error: any) {
      console.error(error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }
  };
};