import React from "react";
import { Link } from "react-router-dom";
import PastAnswerCard from "../../components/discussion/PastAnswerCard";

export default function AskQuestion() {
  return (
    <>
      <div
        className="w-full lg:w-3/5 md:mr-10 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <p className="text-xl">Ask a public question</p>
        </div>
        <hr className="border-b my-5 border-gray-200" />
        <div>
          <form action="#" method="post">
            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                for=""
              >
                Title
              </label>
              <p className="text-sm">
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                type="text"
                name="field-name"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                for=""
              >
                Body
              </label>
              <p className="text-sm">
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                rows="10"
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                for=""
              >
                Category
              </label>
              <p className="text-sm">
                Pick one tag category suit your question
              </p>
              <select className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none">
                <option>Programming</option>
                <option>Exercise</option>
              </select>
            </div>
            <div className="mb-2">
              <Link
                to="/discussion/successfully-submit"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-sm">Submit your question</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className="w-full h-full lg:w-1/4 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 border rounded bg-white shadow-lg leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <PastAnswerCard />
      </div>
    </>
  );
}
