import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/layout/meta/Meta";
import StepCard from "../../components/upload/StepCard";

export default function Upload() {
  return (
    <>
    <Meta title="Onboard to Upload using OCR | KitaShare Web Application and OCR" />
      <div
        className="w-full lg:max-h-screen p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="block space-y-20 lg:space-y-0 lg:flex lg:justify-around cursor-default">
          <StepCard
            image={require("../../images/upload-img.svg")}
            title="Upload file"
            description="The latest OCR API Node.JS wrapper is from user DavideViolante. It
              allows you to specify the OCR Space API endpoints (Free and PRO)."
            dataAos="zoom-y-out"
            dataAosDelay="150"
          />

          <StepCard
            image={require("../../images/fill-img.svg")}
            title="Fill form fields"
            description="The latest OCR API Node.JS wrapper is from user DavideViolante. It
              allows you to specify the OCR Space API endpoints (Free and PRO)."
            dataAos="zoom-y-out"
            dataAosDelay="450"
          />

          <StepCard
            image={require("../../images/celebrate-img.svg")}
            title="Convert"
            description="The latest OCR API Node.JS wrapper is from user DavideViolante. It
              allows you to specify the OCR Space API endpoints (Free and PRO)."
            dataAos="zoom-y-out"
            dataAosDelay="850"
          />
        </div>

        <div className="block space-y-20 lg:space-y-0 lg:flex lg:justify-around">
          <div>
            <div
              className="flex justify-start md:justify-center space-x-3 mt-20"
              data-aos="fade-up"
              data-aos-delay="1150"
            >
              <Link
                to="/student/dashboard"
                className="btn-sm p-4 md:p-3 text-white shadow-lg bg-green-500 hover:bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white flex-shrink-0 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-sm">Dashboard</span>
              </Link>
              <Link
                to="/student/start-upload"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <svg
                  className="w-5 h-5 text-white flex-shrink-0 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-sm">Upload Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
