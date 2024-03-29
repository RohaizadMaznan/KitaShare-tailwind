import React from "react";
import { Link } from "react-router-dom";

export default function PastAnswerList({label, url, key}) {

    // let list = [
    //     {label: 'Programming: With Icon and Text', url:'/discussion/home'},
    //     {label: 'Angular Save Operation is Gone After Refresh', url:'/discussion/home'},
    //     {label: 'Comparing Different Excel Permutations', url:'/discussion/home'},
    // ];

  return (
    <div>
      <Link
        key={key}
        className="hover:underline text-blue-500 background-transparent capitalize py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        to={url}
      >
        {label.substring(0, 35) + "..."}
      </Link>
    </div>
  );
}
