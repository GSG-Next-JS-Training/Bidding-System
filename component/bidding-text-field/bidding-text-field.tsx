import React, { FC } from "react";
import { useField } from "formik";

interface BiddingTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const BiddingTextField: FC<BiddingTextFieldProps> = ({
  name,
  label,
  ...props
}) => {
  const [field, meta] = useField<string>(name);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label
          htmlFor={name}
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        {...field}
        {...props}
        style={{
          border:
            meta.touched && meta.error ? "1px solid red" : "1px solid #ccc",
          outline:
            meta.touched && meta.error ? "1px solid red" : "1px solid #ccc",
        }}
      />
      {meta.touched && meta.error && (
        <div
          style={{ color: "red", marginTop: "0.5rem", fontSize: "0.875rem" }}
        >
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default BiddingTextField;
