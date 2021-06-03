import React, { useState } from "react";
import fire from "../../../auth/fbAuth";
import { Link, withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function Avatar({ history }) {
  const [show1, setshow1] = useState(false);
  const { addToast } = useToasts();

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        console.log("You are logged out!");
        const message = "Logged out. See you again!";
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/");
      });
  };

  return (
    <>
      <div className="px-6 flex flex-col items-start sm:items-center sm:flex-row flex-wrap">
        {/* Code block starts */}
        {/* <div className="flex items-center mb-4 lg:mb-0 mr-10">
                    <div className="w-12 h-12 bg-cover rounded-md mr-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_1.png" alt className="rounded h-full w-full overflow-hidden shadow" />
                    </div>
                    <div>
                        <p className="text-gray-800 dark:text-gray-100 text-base font-medium">Steve Doe</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">View Profile</p>
                    </div>
                </div> */}
        {/* Code block ends */}
        {/* Code block starts */}
        {/* <div className="flex items-center mb-4 lg:mb-0 mr-10 relative cursor-pointer" onClick={() => setshow(!show)}>
                    {show && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-16  top-0">
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={7} r={4} />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <span className="ml-2">My Profile</span>
                                </div>
                            </li>
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <line x1={12} y1={17} x2={12} y2="17.01" />
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                                <span className="ml-2">Help Center</span>
                            </li>
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">Account Settings</span>
                            </li>
                        </ul>
                    )}
                    <div className="w-12 h-12 bg-cover rounded mr-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_1.png" className="rounded h-full w-full overflow-hidden shadow" alt />
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-800 dark:text-gray-100 text-base font-medium">Steve Doe</p>
                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400" onClick={() => setshow(!show)}>
                            {show ? (
                                <svg id="upIcon1" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            ) : (
                                <svg id="downIcon1" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div> */}
        {/* Code block ends */}
        {/* Code block starts */}
        <div className="flex items-center mb-4 lg:mb-0 relative cursor-pointer">
          {show1 && (
            <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-12 top-0 lg:-mr-12">
              <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link to="/admin/dashboard">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="ml-2">Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                <Link to="/admin/my-question">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    <span className="ml-2">My Question</span>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                <Link to="/admin/my-upload">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <span className="ml-2">My Upload</span>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link to="/admin/profile">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    <span className="ml-2">Account Settings</span>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="ml-2" onClick={handleLogout}>
                  Sign out
                </span>
              </li>
            </ul>
          )}
          <div className="w-10 h-10 bg-cover rounded-md mr-3">
            <img
              src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
              className="rounded h-full w-full overflow-hidden shadow"
              alt="Profile"
            />
          </div>
          <div className="flex items-center" onClick={() => setshow1(!show1)}>
            <div className="cursor-pointer text-gray-600 dark:text-gray-400">
              {show1 ? (
                <svg
                  id="upIcon1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              ) : (
                <svg
                  id="downIcon1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* Code block ends */}
      </div>
    </>
  );
}

export default withRouter(Avatar);
