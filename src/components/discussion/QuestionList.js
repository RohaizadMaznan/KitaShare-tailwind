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

            <a
              href="#"
              className="grid grid-rows-2 mx-auto mb-3 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400"
            >
              <div className="inline-block font-medium text-2xl text-white">
                {answer}
              </div>

              <div className="inline-block font-medium text-white mx-1 text-sm lg:text-md">
                Answers
              </div>
            </a>

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
                    <span className="text-sm">{answer} Answers</span>
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
                to="/discussion/the-question"
                className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
              >
                {title}
              </Link>

              <p className="mt-2 text-gray-600 text-sm md:text-md">{content}</p>
            </div>

            <div className="grid grid-cols-2 mt-4 my-auto">
              <div className="col-span-12 lg:col-span-8">
                <a
                  href="#"
                  className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                >
                  {tag}
                </a>
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
                <a href="#" className="flex items-center">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="mr-2 w-8 h-8 rounded-full"
                  />

                  <div className="text-gray-600 font-bold text-sm hover:underline">
                    {postOwner}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
