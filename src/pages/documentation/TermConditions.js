import React from "react";
import { Link } from "react-router-dom";
import UsefulLikes from "../../components/documentation/UsefulLikes";
import Meta from "../../components/layout/meta/Meta";

export default function TermConditions() {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
    <Meta title="Terms & Conditions &mdash; Documentation | KitaShare Web Application and OCR" />
      <div className="text-gray-900">
        <div className="justify-between flex">
          <div>
            <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
            <Link
              to="/documentation/agreement-of-privacy"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Agreement of Privacy
            </Link>
          </div>
          <div>
            <Link
              to="/documentation/ocr"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Optical Character Recognition{" "}
            </Link>
            <span className="text-base text-blue-500 font-bold">&raquo;</span>
          </div>
        </div>
        <h1 className="break-normal font-bold pt-6 pb-2 text-xl">
          Terms and Conditions
        </h1>
        <hr className="border-b border-gray-400" />
      </div>

      <p className="py-6">
        These Terms of Use apply to the use of the Platform of KitaShare
        (Rohaizad Maznan FYP, UTM). Please read these Terms of Use carefully in
        order to ensure that you are aware of your rights and obligations when
        using the Platform. You can download and print this document.
      </p>
      <h1 className="py-2 font-bold">Terms of Use</h1>
      <hr className="border-b border-gray-200" />
      <p className="py-6">
        These Terms of Use, inter alia, describe the following aspects of the
        relationship between you and StuDocu:
      </p>
      <div>
        <ul class="list-disc ml-10 space-y-2">
          <li>
            The provision of Study Material (article 7) and creating a Profile
            (article 5);
          </li>
          <li>The functionalities of the Platform (articles 3- 6);</li>
          <li>Books that you read and courses you follow</li>
          <li>The notice and take down procedure (article 14);</li>
          <li>The limitation of liability of StuDocu (article 15).</li>
        </ul>
      </div>

      <UsefulLikes />
    </div>
  );
}
