import React from "react";

export default function UsefulLikes() {
  return (
    <div>
      <hr className="border-b border-gray-400 mt-10" />

      <div className="flex items-center mt-3">
        <svg
          className="h-16 fill-current text-gray-600 hover:shadow hover:bg-blue-100 hover:text-green-500 p-4 mr-2 border rounded"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
        </svg>
        <svg
          className="h-16 fill-current text-gray-600 hover:shadow hover:bg-blue-100 hover:text-red-500 p-4 mr-2 border rounded"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
        </svg>
        <div className="pl-4">
          <p className="text-gray-800 font-bold">
            Did you find this article useful?
          </p>
          <p className="text-xs text-gray-600 pt-2">
            0 out of 0 found this useful
          </p>
        </div>
      </div>
    </div>
  );
}
