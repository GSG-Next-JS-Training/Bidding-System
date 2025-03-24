"use client";
import { hideSnackbar } from "@/feaures/snackbarSlice/snackbarSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import React, { FC, useEffect } from "react";

const Snackbar: FC = () => {
  const { duration, message, open, type } = useAppSelector(
    (state) => state.snackbar
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => dispatch(hideSnackbar()), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!open) return null;

  let alertClass = "alert-info";
  if (type === "success") alertClass = "alert-success";
  else if (type === "warning") alertClass = "alert-warning";
  else if (type === "error") alertClass = "alert-error";

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`alert ${alertClass} shadow-lg text-white`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
