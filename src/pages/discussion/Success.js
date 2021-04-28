import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div
        className="w-full p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex justify-center">
          <div className="inline-block align-center">
            <img
              className="mx-auto"
              src={require("../../images/success-img.svg")}
              width="300"
              height="auto"
              alt="Success"
            />
            <p className="mt-5 lg:mt-10 lg:text-xl text-md ">
              Your question has been successfully submitted.
            </p>
            <div className="flex justify-center space-x-3 mt-5">
              <Link
                to="/discussion/successfully-submit"
                className="btn-sm text-white shadow-lg bg-green-500 hover:bg-green-600"
              >
                <span className="text-sm">My Question</span>
              </Link>
              <Link
                to="/discussion/home"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-sm">Back to Discussion</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
