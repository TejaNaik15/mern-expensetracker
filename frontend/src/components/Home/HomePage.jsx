import React from "react";
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer"; // <-- Import Footer component

const HomePage = () => {
  return (
    <>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center text-gray-200">
            Track Your Expenses Effortlessly
          </h1>
          <p className="mt-4 text-xl text-center text-gray-400">
            Manage your finances with a modern solution designed for you.
          </p>
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-3xl text-gray-200" />
              <p className="mt-2 text-gray-400">Efficient Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFilter className="text-3xl text-gray-200" />
              <p className="mt-2 text-gray-400">Transactions Filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <IoIosStats className="text-3xl text-gray-200" />
              <p className="mt-2 text-gray-400">Insightful Reports</p>
            </div>
          </div>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-200">
          How It Works
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="p-4 rounded-full bg-blue-600 text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-200">Sign Up</h3>
            <p className="text-gray-400">Register and start managing your expenses in a minute.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="p-4 rounded-full bg-green-600 text-white mb-4">
              <FaList className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-200">Add Transactions</h3>
            <p className="text-gray-400">Quickly add income and expenses to your account.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="p-4 rounded-full bg-yellow-600 text-white mb-4">
              <FaChartPie className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-200">View Reports</h3>
            <p className="text-gray-400">See insightful reports & graphs of your finances.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-200">
          What Our Users Say
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4 text-gray-300">
              "This app has revolutionized the way I track my expenses. Highly
              intuitive and user-friendly."
            </p>
            <p className="mt-4 font-bold text-gray-200">- KAMAL NELAPATI</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4 text-gray-300">
              "Finally, a hassle-free way to manage my finances. The insights
              feature is a game changer!"
            </p>
            <p className="mt-4 font-bold text-gray-200">- SANJAY NELAPATI</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-200">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-4 text-gray-400">
            Join us now and start managing your expenses like a pro!
          </p>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
              Sign Up For Free
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;
