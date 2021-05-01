import React from "react";

export default function ProfileInput({id, label, placeholder, value, onChange, inputName, disable,inputType}) {
  return (
    <>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-3/12">
          <label
            className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
            htmlFor="inline-full-name"
          >
            {label}
          </label>
        </div>
        <div className="md:w-9/12">
          <input
            onChange={onChange}
            name={inputName}
            className="bg-gray-100 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id={id}
            type={inputType}
            placeholder={placeholder}
            value={value}
            disabled={disable}
          />
        </div>
      </div>
    </>
  );
}
