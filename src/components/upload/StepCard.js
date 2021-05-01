import React from "react";

export default function StepCard({image, title, description, dataAos, dataAosDelay}) {
  return (
    <>
      <div>
        <div
          className="text-center max-w-xs bg-gray-100 shadow-lg rounded-lg p-5 hover:shadow-2xl transition duration-200 ease-in-out"
          data-aos={dataAos}
          data-aos-delay={dataAosDelay}
        >
          <div>
            <img
              className="mx-auto"
              src={image}
              width="200"
              height="auto"
              alt="Success"
            />
          </div>
          <div className="mb-5 mt-10">
            <p className="text-lg font-medium">{title}</p>
          </div>
          <div>
            <p className="text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
