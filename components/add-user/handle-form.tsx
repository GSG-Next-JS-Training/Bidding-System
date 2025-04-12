"use client";
import { Form, FormikProvider } from "formik";
import useUserForm from "./hooks/useForm";
import BiddingTextField from "../bidding-text-field";

const AddUserForm = () => {
  const { formik, isPending } = useUserForm();

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary">Full Name</label>
          <BiddingTextField
            name="fullName"
            type="text"
            placeholder="Enter full name"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Email</label>
          <BiddingTextField
            name="email"
            type="email"
            placeholder="Enter email"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Password</label>
          <BiddingTextField
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Address</label>
          <BiddingTextField
            name="address"
            type="text"
            placeholder="Enter address"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Birth Date</label>
          <BiddingTextField
            name="birthDate"
            type="date"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Phone Number</label>
          <BiddingTextField
            name="phoneNumber"
            type="text"
            placeholder="Enter phone number"
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary">Role</label>
          <select
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            className="w-full p-2 border border-gray-300 rounded-lg bg-neutral"
          >
            <option value="">Select a role</option>
            <option value="bedding-company">Bedding Company</option>
            <option value="offer-company">Offer Company</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full text-white py-2 rounded-lg hover:bg-secondary cursor-pointer btn btn-primary"
        >
          {isPending ? "Creating User..." : "Create User"}
        </button>
      </Form>
    </FormikProvider>
  );
}
export default AddUserForm;