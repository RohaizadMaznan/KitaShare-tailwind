import React from "react";
import SearchBox from "../../components/student/SearchBox";

export default function index() {
  return (
    <div>
      <div className="lg:pl-6 space-y-10 text-gray-900">
        <SearchBox />
        <div>
            <p className="text-xl">My Handnotes</p>
        </div>
      </div>
    </div>
  );
}
