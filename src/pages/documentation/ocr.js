import React from "react";
import { Link } from "react-router-dom";
import UsefulLikes from "../../components/documentation/UsefulLikes";
import Meta from "../../components/layout/meta/Meta";

export default function TermConditions() {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
    <Meta title="Optical Character Recognition &mdash; Documentation | KitaShare Web Application and OCR" />
      <div className="text-gray-900">
        <div className="justify-between flex">
          <div>
            <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
            <Link
              to="/documentation/terms-and-condition"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Terms and Condition
            </Link>
          </div>
          <div>
            <Link
              to="/documentation/chatbot"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Chatbot{" "}
            </Link>
            <span className="text-base text-blue-500 font-bold">&raquo;</span>
          </div>
        </div>
        <h1 className="break-normal font-bold pt-6 pb-2 text-xl">
          Optical Character Recognition
        </h1>
        <hr className="border-b border-gray-400" />
      </div>

      <p className="py-6">
      Optical character recognition or optical character reader (OCR) is that the electronic or mechanical conversion of pictures of written, written or written text into machine-encoded text, whether or not from a scanned document, a photograph of a document, a scene-photo (e.g., text on signs and billboards during a landscape photo) or from subtitle text superimposed on a picture (e.g., from a tv broadcast).
      </p>

      <UsefulLikes />
    </div>
  );
}
