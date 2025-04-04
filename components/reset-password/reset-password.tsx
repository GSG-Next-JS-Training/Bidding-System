"use client";

import Image from "next/image";
import key from "@/public/key.png";
import { Form, FormikProvider } from "formik";
import BiddingTextField from "@/component/bidding-text-field";
import useForm from "./hooks/useForm";
import Link from "next/link";

const ResetPassword: React.FC = () => {
  const { formik, isPending } = useForm();

  return (
    <div className="flex mt-52 justify-center h-screen ">
      <FormikProvider value={formik}>
        <Form className="flex flex-col items-center h-fit bg-white p-6 rounded-2xl shadow-2xl">
          <div className="p-2 bg-white rounded-2xl border-2 border-accent">
            <Image src={key} alt="key" height={50} width={50} />
          </div>
          <h1 className="text-3xl font-bold text-primary mt-4">
            Verfication code
          </h1>
          <p className="text-gray-600">
            Create your new password here make it strong
          </p>
          <div className="w-full mt-4">
            <BiddingTextField
              id="password"
              placeholder="Enter your password"
              name=" password"
              className="w-full mt-2 p-2 input-primary rounded-lg focus:outline-none"
            />

            <BiddingTextField
              id="confirm-password"
              placeholder="confirm your password"
              name=" confirm-password"
              className="w-full mt-2 p-2 input-primary rounded-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-1 rounded-lg"
            disabled={isPending}
          >
            {isPending ? "Checking code..." : "confirm new password"}
          </button>
          <Link
            href="/login"
            className="mt-4 hover-link text-accent hover:text-primary duration-300 ease-in"
          >
            Back to log in
          </Link>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ResetPassword;
