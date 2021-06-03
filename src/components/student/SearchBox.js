import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBox() {
  const searchInputRef = useRef(null);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    const doc = searchInputRef.current.value;

    if (!doc) return;

    history.push(`/search?doc=${doc}`);
    // router.push(`/search?doc=${doc}`);
  };

  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600">
        <form autoComplete="off" onSubmit={search}>
          <input
            ref={searchInputRef}
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
