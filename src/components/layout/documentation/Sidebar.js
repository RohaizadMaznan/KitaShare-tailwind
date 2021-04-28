import React from "react";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
  const currentRoute = useHistory().location.pathname.toLowerCase();

  return (
    <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal z-0" data-aos="fade-up">
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
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
        className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
        style={{ top: "5em" }}
        id="menu-content"
      >
        <ul className="list-reset">
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/documentation/about"
              className={`block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400 ${
                currentRoute.includes("about")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <span className="pb-1 md:pb-0 text-sm text-gray-900">
                About KitaShare
              </span>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/documentation/agreement-of-privacy"
              className={`block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400 ${
                currentRoute.includes("agreement-of-privacy")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <span className="pb-1 md:pb-0 text-sm">Agreement of Privacy</span>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/documentation/terms-and-condition"
              className={`block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400 ${
                currentRoute.includes("terms-and-condition")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <span className="pb-1 md:pb-0 text-sm">Terms & Conditions</span>
            </Link>
          </li>
          {/* <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className="pb-1 md:pb-0 text-sm">F.A.Qs</span>
            </Link>
          </li> */}
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/documentation/ocr"
              className={`block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400 ${
                currentRoute.includes("ocr")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <span className="pb-1 md:pb-0 text-sm">
                Optical Character Recognition
              </span>
            </Link>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <Link
              to="/documentation/chatbot"
              className={`block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400 ${
                currentRoute.includes("chatbot")
                  ? "lg:border-blue-500 font-bold"
                  : " "
              }`}
            >
              <span className="pb-1 md:pb-0 text-sm">Chatbot</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
