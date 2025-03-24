"use client";
import { Form, FormikProvider } from "formik";
import Link from "next/link";
import BiddingTextField from "../bidding-text-field";
import useLogin from "./hooks/useLogin";

const HandleLogin = () => {
  const { formik } = useLogin();

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="pg-white p-8 rounded-2xl shadow-lg w-96  bg-gray-100">
          <h1 className="text-2xl text-blue-500 font-bold text-center mb-6">
            {" "}
            Login
          </h1>
          <FormikProvider value={formik}>
            <Form>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-500 font-medium"
                >
                  Email:
                </label>
                <BiddingTextField
                  id="email"
                  type="email"
                  placeholder="your Email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-500 font-medium"
                >
                  {" "}
                  Password:
                </label>
                <BiddingTextField
                  id="password"
                  type="password"
                  placeholder="your password"
                  name="password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <Link href={""} className="text-blue-500 hover:underline">
                  Forgot your Password?
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                  login
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default HandleLogin;
