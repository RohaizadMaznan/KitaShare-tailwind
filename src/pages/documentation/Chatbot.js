import React from "react";
import { Link } from "react-router-dom";
import UsefulLikes from "../../components/documentation/UsefulLikes";
import Meta from "../../components/layout/meta/Meta";

export default function TermConditions() {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
    <Meta title="Chatbot &mdash; Documentation | KitaShare Web Application and OCR" />
      <div className="text-gray-900">
        <div className="justify-start flex">
          <div>
            <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
            <Link
              to="/documentation/ocr"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Optical Character Recognition
            </Link>
          </div>
        </div>
        <h1 className="break-normal font-bold pt-6 pb-2 text-xl">
          Chatbot
        </h1>
        <hr className="border-b border-gray-400" />
      </div>

      <p className="py-6">
      The chatbot is one of two main features in the KitaShare system, where the chatbot will help the user to navigate to the correct location in the system efficiently. This chatbot was using a reply and triggered concept. When the chatbot asks a question to the user, the user will have to respond to the chatbot to understand the user's needs. This may choose an option question or direct question that needs the user to type it out by using a keyboard or keypad.
      </p>

      <UsefulLikes />
    </div>
  );
}
