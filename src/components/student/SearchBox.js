import React from "react";

export default function SearchBox() {
  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600">
        <form autoComplete="off">
          <input
            className="border border-gray-200 text-lg shadow-md bg-white w-full h-16 px-5 pr-16 rounded-md focus:border-blue-300"
            type="search"
            name="search"
            placeholder="Search for handnote document"
          />
          <button
            type="submit"
            className="btn-sm bg-blue-500 text-white absolute right-0 top-0 mt-5 mr-4"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
