"use client";
import { Form, FormikProvider } from "formik";
import offerFormik from "./hooks/useForm";
import BiddingTextField from "../bidding-text-field";

const formFields = [
  {
    id: "name",
    label: "Company Name:",
    placeholder: "Company Name",
    name: "name",
  },
  {
    id: "number",
    label: "Number:",
    placeholder: "your number",
    name: "number",
  },
  {
    id: "location",
    label: "Location:",
    placeholder: "location",
    name: "location",
  },
  {
    id: "Discount",
    label: "Discount:",
    placeholder: "Discount",
    name: "discount",
  },
  {
    id: "Service provide",
    label: "Service provide:",
    placeholder: "Service provide",
    name: "service",
  },
];

const HandleOffer = () => {
  const { formik } = offerFormik();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-base-100 p-8 rounded-box shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Create Offer Company
        </h1>
        <FormikProvider value={formik}>
          <Form className="space-y-4">
            {formFields.map(({ id, label, placeholder, name }) => (
              <div key={id}>
                <label htmlFor={id} className="text-primary font-semibold">
                  {label}
                </label>
                <BiddingTextField
                  id={id}
                  placeholder={placeholder}
                  name={name}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label htmlFor="Owner" className="text-primary font-semibold">
                Company Owner
              </label>
              <select
                id="Owner"
                name="owner"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"
              >
                <option value="" disabled>
                  Company Owner
                </option>
                <option value="1">Company Owner 1</option>
                <option value="2">Company Owner 2</option>
                <option value="3">Company Owner 3</option>
              </select>
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
