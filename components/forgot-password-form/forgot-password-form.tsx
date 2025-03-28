"use client";

import Image from 'next/image';
import key from "@/public/key.png";
import Link from 'next/link';
import { Formik, Form, FormikHelpers } from "formik";
import BiddingTextField from '@/component/bidding-text-field';
import  {validationSchema}  from './validationSchema';
import { ForgotPasswordValues } from './types';
import useSnackbar from '@/hooks/useSnackbar';
import { INITIAL_VALUES } from './constants';

const ForgotPasswordForm: React.FC = () => {
  const { displaySnackbar } = useSnackbar();
  const handleSubmit = ( values: ForgotPasswordValues , { setSubmitting }: FormikHelpers<ForgotPasswordValues>) => {
    displaySnackbar({ type: "success", message: "reset link sent check your email" });
    setSubmitting(false);
  };

  return (
    <div className='flex mt-52 justify-center h-screen'>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col items-center h-fit bg-white p-6 rounded-2xl shadow-2xl'>
            <div className="p-2 bg-white rounded-2xl border-2 border-accent">
              <Image src={key} alt="key" height={50} width={50} />
            </div>
            <h1 className="text-3xl font-bold text-primary mt-4">Forgot password?</h1>
            <p className="text-gray-600">No worries, we will send you a recovery link</p>
            <div className="w-full mt-4">
            <BiddingTextField
                  id="email"
                  placeholder="Enter your Email"
                  name="email"
                  className="w-full mt-1 p-2 input-primary rounded-lg focus:outline-none"
                />

            
            </div>
            <button
              type="submit"
              className='btn btn-primary w-full mt-2 rounded-lg'
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
            <Link href="/login" className='mt-4 hover-link text-accent hover:text-primary duration-300 ease-in'>
              Back to log in
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;