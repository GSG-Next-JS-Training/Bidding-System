"use client";
import { Form, FormikProvider } from "formik";
import useForm from "./hooks/useForm";
import BiddingTextField from "../handle-login/bidding-text-field";

const dummyCompanies = [
  { id: "1", companyName: "Tech Solutions Ltd." },
  { id: "2", companyName: "Smart Build Inc." },
  { id: "3", companyName: "Green Energy Corp." },
];

const AddBiddingForm = () => {
  const {formik, isPending} = useForm();

  return (
    <FormikProvider value={formik}>
    <Form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-600">Bidding Company</label>
        <select
          name="biddingCompanyId"
          onChange={formik.handleChange}
          value={formik.values.biddingCompanyId}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select a company</option>
          {dummyCompanies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.companyName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Bid Amount</label>
        <BiddingTextField
          type="number"
          name="bidAmount"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter bid amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Service Offered</label>
        <BiddingTextField
          type="text"
          name="serviceOffered"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Describe the service"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Bid Status</label>
        <select
          name="bidStatus"
          onChange={formik.handleChange}
          value={formik.values.bidStatus}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="pending">Pending</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
      >
        {isPending ? "Submitting..." : "Submit Bid"}
      </button>
    </Form>
    </FormikProvider>
  );
};

export default AddBiddingForm;