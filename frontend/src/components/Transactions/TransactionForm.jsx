import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaRegCommentDots,
  FaWallet,
} from "react-icons/fa";
import { listCategoriesAPI } from "../../services/category/categoryService";
import { addTransactionAPI } from "../../services/transactions/transactionService";
import AlertMessage from "../Alert/AlertMessage";

const validationSchema = Yup.object({
  type: Yup.string()
    .required("Transaction type is required")
    .oneOf(["income", "expense"]),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  category: Yup.string().required("Category is required"),
  date: Yup.date().required("Date is required"),
  description: Yup.string(),
});

const TransactionForm = () => {
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const {
    mutateAsync,
    isPending,
    isError: isAddTranErr,
    error: transErr,
    isSuccess,
  } = useMutation({
    mutationFn: addTransactionAPI,
    mutationKey: ["add-transaction"],
  });
  //fetching
  const { data, isError, isLoading, isFetched, error, refetch } = useQuery({
    queryFn: listCategoriesAPI,
    queryKey: ["list-categories"],
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      amount: "",
      category: "",
      date: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto my-10 bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-6 border border-gray-700"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white">
          Transaction Details
        </h2>
        <p className="text-gray-300">Fill in the details below.</p>
      </div>
      {/* Display alert message */}

      {isError && (
        <AlertMessage
          type="error"
          message={
            error?.response?.data?.message ||
            "Something happened please try again later"
          }
        />
      )}
      {isSuccess && (
        <AlertMessage type="success" message="Transaction added successfully" />
      )}
      {/* Transaction Type Field */}
      <div className="space-y-2">
        <label
          htmlFor="type"
          className="flex gap-2 items-center text-gray-200 font-medium"
        >
          <FaWallet className="text-blue-400" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className="block w-full p-2 mt-1 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p className="text-red-400 text-xs">{formik.errors.type}</p>
        )}
      </div>

      {/* Amount Field */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="amount" className="text-gray-200 font-medium">
          <FaDollarSign className="inline mr-2 text-blue-400" />
          Amount
        </label>
        <input
          type="number"
          {...formik.getFieldProps("amount")}
          id="amount"
          placeholder="Amount"
          className="w-full border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm py-2 px-3 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        />
        {formik.touched.amount && formik.errors.amount && (
          <p className="text-red-400 text-xs italic">{formik.errors.amount}</p>
        )}
      </div>

      {/* Category Field */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="category" className="text-gray-200 font-medium">
          <FaRegCommentDots className="inline mr-2 text-blue-400" />
          Category
        </label>
        <select
          {...formik.getFieldProps("category")}
          id="category"
          className="w-full border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm py-2 px-3 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          <option value="">
            {!formik.values.type 
              ? "Select a transaction type first" 
              : "Select a category"}
          </option>
          {isLoading && <option disabled>Loading categories...</option>}
          {formik.values.type && 
            data?.filter((cat) => cat.type === formik.values.type)?.map((category) => {
              return (
                <option key={category?._id} value={category?.name}>
                  {category?.name?.charAt(0).toUpperCase() + category?.name?.slice(1)}
                </option>
              );
            })}
        </select>
        {formik.touched.category && formik.errors.category && (
          <p className="text-red-400 text-xs italic">
            {formik.errors.category}
          </p>
        )}
      </div>

      {/* Date Field */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="date" className="text-gray-200 font-medium">
          <FaCalendarAlt className="inline mr-2 text-blue-400" />
          Date
        </label>
        <input
          type="date"
          {...formik.getFieldProps("date")}
          id="date"
          className="w-full border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm py-2 px-3 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        />
        {formik.touched.date && formik.errors.date && (
          <p className="text-red-400 text-xs italic">{formik.errors.date}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="description" className="text-gray-200 font-medium">
          <FaRegCommentDots className="inline mr-2 text-blue-400" />
          Description (Optional)
        </label>
        <textarea
          {...formik.getFieldProps("description")}
          id="description"
          placeholder="Description"
          rows="3"
          className="w-full border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm py-2 px-3 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <p className="text-red-400 text-xs italic">
            {formik.errors.description}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
      >
        Submit Transaction
      </button>
    </form>
  );
};

export default TransactionForm;