import {  NextRequest, NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { loginUser } from "@/modules/repositories/authRepository";


export const loginHandler = async (req : NextRequest) =>{
  const body = await req.json();
    const {email , password} = body;
    if(!email || !password){
        return NextResponse.json({message : "email and password are required"}, {status : 400});
    }
    const { token } = await loginUser(email, password);
    return NextResponse.json({message : token}, {status : 200});
}

export const POST = handlerWrapper(loginHandler);