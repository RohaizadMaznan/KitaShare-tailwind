import React from "react";
import { Link } from "react-router-dom";

export default function TheQuestion() {
  return (
    <>
      <div
        className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <nav class="font-bold" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center">
              <Link to="/discussion/home">Home</Link>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            {/* <li class="flex items-center">
              <Link to="#">Second Level</Link>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li> */}
            <li>
              <Link to="#" class="text-gray-500" aria-current="page">
                Comparing Different Excel Permutations
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <Link
            to="#"
            className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
          >
            Programming
          </Link>
          <p className="text-2xl">Comparing Different Excel Permutations</p>
          <div className="inline-block space-y-5 lg:flex justify-start lg:justify-between space-x-3 mt-2 text-sm ">
            <div>
              <Link to="#" className="flex items-center">
                <img
                  src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                  alt="avatar"
                  className="mr-2 w-8 h-8 rounded-full"
                />

                <div className="text-gray-900 font-bold text-sm hover:underline hover:text-blue-500 transition duration-200 ease-in-out">
                  Rohaizad Maznan
                </div>
                <div className="text-gray-900 text-sm opacity-50">
                  &nbsp;&mdash;&nbsp; a few minute ago
                </div>
              </Link>
            </div>
            <div>
              <p className="text-sm">
                Viewed{" "}
                <span className="hover:underline cursor-pointer text-blue-500 transition duration-200 ease-in-out">
                  1902
                </span>{" "}
                times
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="inline-block space-y-5 justify-start lg:flex">
          <div className="w-full lg:w-3/4 pr-5">
            <p>
              I have 4 subjects that can be graded i.e. Math's, Science,
              English, Geography. Each subject is graded on a proficiency scale
              from 1-5, i.e PS1, PS2, PS3, PS4, PS5, where PS2 is better than
              PS1, PS3 is better than PS2 and so on
            </p>
          </div>
          <div className="w-full lg:w-1/4 bg-gray-100 p-3 shadow-md">
            <p className="font-bold">Attachment</p>
            <hr className="my-2" />
            <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer">
              Attachment.pdf
            </Link>
          </div>
        </div>
        <hr className="my-5" />
        <div className="text-sm flex justify-start space-x-4 opacity-50 hover:opacity-100 transition duration-200 ease-in-out">
          <Link
            to="/"
            className="hover:text-blue-600 hover:underline cursor-pointer"
          >
            Share
          </Link>
          <Link
            to="/"
            className="hover:text-blue-600 hover:underline cursor-pointer"
          >
            Edit
          </Link>
          <Link
            to="/"
            className="hover:text-blue-600 hover:underline cursor-pointer"
          >
            Hide
          </Link>
          <Link
            to="/"
            className="hover:text-blue-600 hover:underline cursor-pointer"
          >
            Answered
          </Link>
        </div>
      </div>

      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div>
          <p>Your Answer</p>
          <textarea
            rows="10"
            className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
          ></textarea>
        </div>
        <div className="mt-5">
          <Link
            to="/discussion/successfully-submit"
            className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
          >
            <span className="text-sm">Post Your Answer</span>
          </Link>
        </div>
      </div>
    </>
  );
}
