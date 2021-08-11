import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Meta from "../../components/layout/meta/Meta";
import StepCard from "../../components/upload/StepCard";
import { AuthContext } from "../../auth/Auth";

export default function Upload() {

  const { currentUser } = useContext(AuthContext);

  if(!currentUser) {
    return <Redirect to="/" />
  }

  return (
    <>
    <Meta title="Onboard to Upload using OCR | KitaShare Web Application and OCR" />
      <div
        className="w-full lg:max-h-screen p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="block space-y-20 lg:space-y-0 lg:flex lg:justify-around cursor-default">
          <StepCard
            image={require("../../images/upload-img.svg")}
            title="Upload file"
            description="Start to upload your own handnote and convert it into digital format that are copyable! Just fill in all the required fields and you are good to go!"
            dataAos="zoom-y-out"
            dataAosDelay="150"
          />

          <StepCard
            image={require("../../images/celebrate-img.svg")}
            title="Let's Start Rockin'!"
            description="You handnote is converted into digital format and now can be view in our Handnote page!"
            dataAos="zoom-y-out"
            dataAosDelay="850"
          />
        </div>

        <div className="block space-y-20 lg:space-y-0 lg:flex lg:justify-around">
          <div>
            <div
              className="flex justify-start md:justify-center space-x-3 mt-20"
              data-aos="fade-up"
              data-aos-delay="1150"
            >
              <Link
                to="/student/start-upload"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <svg
                  className="w-5 h-5 text-white flex-shrink-0 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-sm">Upload Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
