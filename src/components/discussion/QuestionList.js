import React from "react";
import { Link } from "react-router-dom";

export default function QuestionList({
  title,
  content,
  tag,
  view,
  vote,
  answer,
  postOwner,
  date,
  avatar,
  id,
}) {
  return (
    <div>
      <div className="bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-0 sm:col-span-2 text-center hidden sm:block">
            <div className="grid grid-rows-2">
              <div className="inline-block font-medium text-xl">{vote}</div>

              <div className="inline-block font-medium text-sm">Votes</div>
            </div>

            {answer === "true" ? (
              <>
                <span className="grid grid-rows-2 mx-auto mb-3 py-3 w-4/5 2lg:w-3/5 rounded-md bg-green-400">
                  <div className="flex justify-center font-medium text-2xl text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </div>

                  <div className="inline-block font-medium text-white mx-1 text-sm lg:text-md">
                    Answered
                  </div>
                </span>
              </>
            ) : (
              <>
                <span className="grid grid-rows-2 text-gray-700 mx-auto mb-3 py-3 w-4/5 2lg:w-3/5 rounded-md bg-white border">
                  <div className="flex justify-center font-medium text-2xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </div>

                  <div className="inline-block font-medium mx-1 text-sm lg:text-md">
                    No answer
                  </div>
                </span>
              </>
            )}

            <div className="grid my-3">
              <span className="inline-block font-bold text-xs">
                {view} Views
              </span>
            </div>
          </div>

          <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
            <div className="grid block sm:hidden">
              <div className="flex flex-wrap">
                <div className="mr-2">
                  <div className="inline-block font-light capitalize">
                    <i className="uil uil-arrow-circle-up mr-1"></i>
                    <span className="text-sm">{vote} Votes</span>
                  </div>
                </div>
                <div className="mr-2">
                  <div className="inline-block font-light capitalize">
                    <i className="uil uil-check-circle mr-1"></i>
                    <span className="text-sm">
                      {/* {answer} */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      Answers
                    </span>
                  </div>
                </div>
                <div className="mr-2">
                  <div className="inline-block">
                    <i className="uil uil-eye mr-1"></i>
                    <span className="text-sm capitalize font-light">
                      {view} Views
                    </span>
                  </div>
                </div>

                <div className="mr-2">
                  <div className="inline-block">
                    <i className="uil uil-clock mr-1"></i>
                    <span className="text-sm font-light">{date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center hidden sm:block">
              <span className="opacity-50 text-sm text-gray-600">{date}</span>
            </div>

            <div className="mt-2">
              <Link
                to={`/discussion/${tag}/${id}`}
                className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
                // onClick={() => postView({ id })}
              >
                {title}
              </Link>

              <p className="mt-2 text-gray-600 text-sm md:text-md">
                {content.substring(0, 250) + "..."}
              </p>
            </div>

            <div className="grid grid-cols-2 mt-4 my-auto">
              <div className="col-span-12 lg:col-span-8">
                <Link
                  to="/"
                  className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                >
                  {tag}
                </Link>
                {/* <a
                  href="#"
                  className="inline-block rounded-full text-white 
                            bg-yellow-400 hover:bg-yellow-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                >
                  RabbitMQ
                </a>
                <a
                  href="#"
                  className="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                >
                  Memcached
                </a>
                <a
                  href="#"
                  className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                >
                  Redis
                </a> */}
              </div>

              <div className="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                <Link to="/" className="flex items-center">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="mr-2 w-8 h-8 rounded-full"
                  />

                  <div className="text-gray-600 font-bold text-sm hover:underline">
                    {postOwner}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
