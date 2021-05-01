import React from "react";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
  const currentRoute = useHistory().location.pathname.toLowerCase();

  return (
    <div
      className="w-full text-xl text-gray-800 leading-normal z-0"
      data-aos="fade-up"
    >
      <div className="block lg:hidden sticky inset-0">
        <button
          id="menu-toggle"
          className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
        >
          <svg
            className="fill-current h-3 float-right"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-0"
        style={{ top: "5em" }}
        id="menu-content"
      >
        <ul className="list-reset">
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/student/profile"
              className={`block pl-4 align-middle text-gray-700 no-underline border-l-4 border-transparent ${
                currentRoute.includes("/student/profile")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <div className="flex justify-start">
                <div className="w-8 h-8 bg-cover mr-3">
                  <img
                    src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                    className="rounded-full h-full w-full overflow-hidden shadow"
                    alt="Profile"
                  />
                </div>
                <div>
                  <span className="pb-1 md:pb-0 text-sm text-gray-900">
                    Rohaizad Maznan
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/student/dashboard"
              className={`block px-5 py-2 align-middle text-gray-900 no-underline hover:text-blue-500 rounded-md ${
                currentRoute.includes("/student/dashboard")
                  ? "bg-blue-100 text-blue-700"
                  : " "
              }`}
            >
              <div className="flex justify-start">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 text-blue-700"
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
                </div>
                <div>
                  <span className="pb-1 md:pb-0 text-sm">Home</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <hr />
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/student/my-question"
              className={`block px-5 py-2 align-middle text-gray-900 no-underline hover:bg-blue-100 hover:text-blue-500 rounded-md ${
                currentRoute.includes("/student/my-question")
                  ? "bg-blue-100 text-blue-700"
                  : " "
              }`}
            >
              <div className="flex justify-start">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="pb-1 md:pb-0 text-sm">My Questions</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/student/my-upload"
              className={`block px-5 py-2 align-middle text-gray-900 no-underline hover:bg-blue-100 hover:text-blue-500 rounded-md ${
                currentRoute.includes("/student/my-upload")
                  ? "bg-blue-100 text-blue-700"
                  : " "
              }`}
            >
              <div className="flex justify-start">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 text-blue-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span className="pb-1 md:pb-0 text-sm">My Uploads</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
