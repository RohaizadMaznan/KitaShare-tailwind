import React from "react";
import PastAnswerList from "./PastAnswerList";

export default function PastAnswerCard() {
  return (
    <div>
      <p className="font-bold text-gray-800">Past Answers</p>
      <hr className="border-b my-2 border-gray-200" />
      <div>
        <div className="inline-block">
          {/* List of past answer questions - This will need to be loop through firestore later on */}
          <PastAnswerList
            label="Programming: With Icon and Text"
            url="/discussion/home"
          />
          <PastAnswerList
            label="Angular Save Operation is Gone After Refresh"
            url="/discussion/home"
          />
          <PastAnswerList
            label="Comparing Different Excel Permutations"
            url="/discussion/home"
          />
        </div>
      </div>
    </div>
  );
}
