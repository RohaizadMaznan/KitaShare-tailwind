import React from "react";
import { Link } from "react-router-dom";
import PastAnswerCard from "../../components/discussion/PastAnswerCard";
import QuestionList from "../../components/discussion/QuestionList";

export default function index() {
  return (
    <>
      <div
        className="w-full lg:w-3/4 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="inline-block md:flex md:justify-between">
          <div>
            <p className="text-2xl">Top Questions</p>
          </div>
          <div className="mr-10">
            <Link
              to="/discussion/ask-question"
              className="btn-sm text-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 my-3 md:my-0 md:ml-3"
            >
              <span>Ask Question</span>
            </Link>
          </div>
        </div>
        <hr className="border-b my-5 border-gray-200" />
        <div>
          <div>
            <QuestionList 
                title="Comparing Different Excel Permutations"
                content="I have 4 subjects that can be graded i.e. Math's, Science, English, Geography. Each subject is graded on a proficiency scale from 1-5, i.e PS1, PS2, PS3, PS4, PS5, where PS2 is better than PS1, PS3 is better than PS2 and so on..."
                tag="Programming"
                view="1902"
                vote="52"
                answer="12"
                postOwner="Rohaizad Maznan"
                avatar="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                date="a few mins ago ago"
            />
          </div>
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
