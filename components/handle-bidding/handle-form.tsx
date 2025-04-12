"use client";
import { Form, FormikProvider } from "formik";
import useBiddingForm from "./hooks/useBiddingForm";
import BiddingTextField from "../bidding-text-field";

const AddBiddingCompanyForm = () => {
  const { formik, isPending } = useBiddingForm();

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary">Company Name</label>
          <BiddingTextField
            name="companyName"
            type="text"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Registration Number</label>
          <BiddingTextField
            name="registrationNumber"
            type="text"
            placeholder="Enter registration number"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Location</label>
          <BiddingTextField
            name="location"
            type="text"
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Bids Submitted</label>
          <BiddingTextField
            name="bidsSubmitted"
            type="number"
            placeholder="Enter number of bids submitted"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Bids Won</label>
          <BiddingTextField
            name="bidsWon"
            type="number"
            placeholder="Enter number of bids won"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Services Offered</label>
          <BiddingTextField
            name="servicesOffered[0]"
            type="text"
            placeholder="Enter service"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full text-white py-2 rounded-lg hover:bg-secondary cursor-pointer btn btn-primary"
        >
          {isPending ? "Creating Company..." : "Create Company"}
        </button>
      </Form>
    </FormikProvider>
  );
};

export default AddBiddingCompanyForm;
