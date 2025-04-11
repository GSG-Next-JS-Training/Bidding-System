"use client";
import { Form, FormikProvider } from "formik";
import useForm from "./hooks/useForm";
import BiddingTextField from "../bidding-text-field";

const AddBiddingForm = () => {
  const { formik, isPending } = useForm();

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary">Title</label>
          <BiddingTextField
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
            placeholder="Enter the title..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary">Description</label>
          <BiddingTextField
            type="text"
            name="description"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
            placeholder="Enter the breif description..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Bid Status</label>
          <BiddingTextField
            type="text"
            name="status"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
            value="Pending"
            disabled
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full text-white py-2 rounded-lg hover:bg-secondary cursor-pointer btn btn-primary"
        >
          {isPending ? "Submitting..." : "Submit Bid"}
        </button>
      </Form>
    </FormikProvider>
  );
};

export default AddBiddingForm;
