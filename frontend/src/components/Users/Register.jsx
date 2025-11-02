import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { registerAPI } from "../../services/users/userService";
import AlertMessage from "../Alert/AlertMessage";

//Validations
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirming your password is required"),
});
const RegistrationForm = () => {
  //Navigate
  const navigate = useNavigate();
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register"],
    onSuccess: () => {
      // Redirect on success
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    // Validations
    validationSchema,
    //Submit
    onSubmit: (values) => {
      //http request
      mutateAsync(values).catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto my-10 bg-gray-900/70 p-6 rounded-xl shadow-lg space-y-6 border border-gray-700"
    >
      <h2 className="text-3xl font-semibold text-center text-white">
        Sign Up
      </h2>
      {/* Display messages */}
      {isPending && <AlertMessage type="loading" message="Loading...." />}
      {isError && (
        <AlertMessage
          type="error"
          message={error?.response?.data?.message || "An unexpected error occurred"}
        />
      )}
      {isSuccess && (
        <AlertMessage type="success" message="Registration success" />
      )}
      <p className="text-sm text-center text-gray-400">
        Join our community now!
      </p>

      {/* Input Field - Username */}
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-500" />
        <input
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          autoComplete="username"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.username && formik.errors.username && (
          <span className="text-xs text-red-500">{formik.errors.username}</span>
        )}
      </div>

      {/* Input Field - Email */}
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          autoComplete="email"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-xs text-red-500">{formik.errors.email}</span>
        )}
      </div>

      {/* Input Field - Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-500" />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
          autoComplete="new-password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-xs text-red-500">{formik.errors.password}</span>
        )}
      </div>

      {/* Input Field - Confirm Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-500" />
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm Password"
          autoComplete="new-password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span className="text-xs text-red-500">
            {formik.errors.confirmPassword}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full  bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;