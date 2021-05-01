import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({
  fileName,
  course,
  code,
  university,
  date,
}) {
  return (
    <>
      <div
        className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <p>This is search result:</p>
        <hr className="my-5" />
        <Link to="/">
          <div className="block hover:bg-gray-100 p-5 translate ease-in-out rounded cursor-pointer border-b">
            <div className="block justify-start lg:flex lg:justify-between ">
              <div className="space-y-5 lg:space-y-0 lg:flex lg:justify-start">
                <div className="h-20 w-32 bg-gray-200 mr-5"></div>
                <div>
                  <p>{fileName}</p>
                  <p className="text-sm">
                    {course} &mdash; {code}
                  </p>
                  <div className="mt-3 flex justify-start opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">{date}</p>
                  </div>
                </div>
              </div>
              <div className="text-sm lg:text-base">
                <p>{university}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
