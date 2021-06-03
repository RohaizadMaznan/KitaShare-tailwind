import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import fire from "../../../auth/fbAuth";
import Avatar from "../admin/Avatar";

export default function Header() {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const [top, setTop] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-10 top-0 bg-white ${!top &&
        "bg-white blur shadow-lg"}`}
    >
      <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4 flex items-center">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <Link
            className="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
            to="/"
          >
            KitaShare
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-blue-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden mt-2 lg:mt-0 z-20"
          id="nav-content"
        >
          <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0"></div>
          <ul className="list-reset lg:flex justify-end items-center">
            <li className="mr-3 py-2 lg:py-0">
              <Link
                className={`inline-block py-2 px-3 text-gray-900 no-underline transition duration-150 ease-in-out hover:bg-gray-200 rounded-md ${
                  currentRoute.includes("documentation")
                    ? "font-bold bg-gray-200"
                    : " "
                }`}
                to="/documentation/about"
              >
                Docs
              </Link>
            </li>
            <li className="mr-3 py-2 lg:py-0">
              <Link
                className={`inline-block py-2 px-3 text-gray-900 no-underline transition duration-150 ease-in-out hover:bg-gray-200 rounded-md ${
                  currentRoute.includes("discussion")
                    ? "font-bold bg-gray-200"
                    : " "
                }`}
                to="/discussion/home"
              >
                Discussion
              </Link>
            </li>
            <li className="mr-3 py-2 lg:py-0">
              <Link
                className={`inline-block py-2 px-3 text-gray-900 no-underline transition duration-150 ease-in-out hover:bg-gray-200 rounded-md ${
                  currentRoute.includes("search")
                    ? "font-bold bg-gray-200"
                    : " "
                }`}
                to="/search?"
              >
                Handnotes
              </Link>
            </li>
            {!loggedIn ? (
              <>
                <li className="mr-3 py-2 lg:py-0">
                  <Link
                    to="/signin"
                    className="text-gray-900 hover:text-gray-900 px-3 py-2 flex items-center transition duration-150 ease-in-out hover:bg-gray-200 rounded-md"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="mr-3 py-2 lg:py-0">
                  <Link
                    to="/signin"
                    className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 ml-3"
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
                    <span>Upload</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mr-3 py-2 lg:py-0">
                  <Link
                    to="/student/upload-file"
                    className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 ml-3"
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
                    <span>Upload</span>
                  </Link>
                </li>
                <li>
                  <Avatar />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
