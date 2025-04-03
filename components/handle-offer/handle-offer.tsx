"use client";
import { Form, FormikProvider } from "formik";
import offerFormik from "./hooks/useForm";
import BiddingTextField from "@/component/bidding-text-field";

const HandleOffer = () => {
  const { formik } = offerFormik();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-base-100 p-8 rounded-box shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Create Company Offer
        </h1>
        <FormikProvider value={formik}>
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-primary font-semibold">
                Company Name:
              </label>
              <BiddingTextField
                id="name"
                placeholder="Company Name"
                name="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="number" className="text-primary font-semibold">
                Number:
              </label>
              <BiddingTextField
                id="number"
                placeholder="your number"
                name="number"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="location" className="text-primary font-semibold">
                Location:
              </label>
              <BiddingTextField
                id="location"
                placeholder="location"
                name="location"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="Discount" className="text-primary font-semibold">
                Discount:
              </label>
              <BiddingTextField
                id="Discount"
                placeholder="Discount"
                name="discount"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="Service provide"
                className="text-primary font-semibold"
              >
                Service provide:
              </label>
              <BiddingTextField
                id="Service provide"
                placeholder="Service provide"
                name="service"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-content font-semibold py-2 rounded-lg hover:bg-secondary transition duration-300 shadow-md"
            >
              Submit
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};
export default HandleOffer;
