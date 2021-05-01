import React from "react";
import fire from "../../auth/fbAuth";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useToasts } from "react-toast-notifications";

export default function UploadTable({ title, id, fileShowHide }) {
  // const shareUrl = `/student/my-upload/${title}`;
  // console.log(id, fileShowHide);

  const shareUrl = "https://github.com/RohaizadMaznan";
  const quote = "My GitHub Profile, Rohaizad Maznan";
  const iconSize = "24";

  const { addToast } = useToasts();

  const fileAnonymous = () => {
    const uploadId = id;

    const db = fire.firestore();
    db.collection("uploads")
      .doc(uploadId)
      .update({
        onHide: true,
      })
      .then(() => {
        console.log(`Upload is hiding ${uploadId}`);
        const message = `${title} is now hiding anonymously.`
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(function(){window.location.reload()}, 4000);
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fileShow = () => {
    const uploadId = id;
    const db = fire.firestore();
    db.collection("uploads")
      .doc(uploadId)
      .update({
        onHide: false,
      })
      .then(() => {
        console.log(`Upload is hiding ${uploadId}`);
        const message = `${title} is now showing to public.`
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(function(){window.location.reload()}, 4000);
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* <table class="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 text-left">
            <th class="w-1/2 text-left">Name</th>
            <th class="w-1/12">Anonymous</th>
            <th class="w-1/12">Share</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
          <tr>
            <td className="hover:text-blue-500 cursor-pointer">
              Intro to CSS Handnotes
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
                checked
              />
            </td>
            <td className="text-center">
              <Link className="btn-sm py-1 px-5 text-xs">Share</Link>
            </td>
          </tr>
          <tr>
            <td className="hover:text-blue-500 cursor-pointer">
              Software Engineering Fundamentals Final Exam Handnotes
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              />
            </td>
            <td className="text-center">
              <Link className="btn-sm py-1 px-5 text-xs">Share</Link>
            </td>
          </tr>
          <tr>
            <td className="hover:text-blue-500 cursor-pointer">
              Intro to JavaScript Handnotes
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              />
            </td>
            <td className="text-center">
              <Link className="btn-sm py-1 px-5 text-xs">Share</Link>
            </td>
          </tr>
        </tbody>
      </table> */}
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4 hover:text-blue-500 cursor-pointer">
          {title}
        </td>
        <td className="px-4 py-4 text-center flex justify-center">
          {/* <input
            type="checkbox"
            onClick={fileAnonymous}
            className="form-checkbox h-5 w-5 text-gray-600"
          /> */}
          {fileShowHide === true ? (
            <span
              onClick={fileShow}
              className="hover:text-blue-600 hover:underline cursor-pointer"
              title="Show"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span
              onClick={fileAnonymous}
              className="hover:text-blue-600 hover:underline cursor-pointer"
              title="Hide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </span>
          )}
        </td>
        <td className="px-4 py-4 text-center">
          {/* <Link
            to="/"
            className="btn-sm py-1 px-5 text-xs hover:bg-blue-600 hover:text-white"
          >
            Share
          </Link> */}
          <div className="flex justify-items-center space-x-1">
            <div>
              <FacebookShareButton
                url={shareUrl}
                quote={quote}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={iconSize} round />
              </FacebookShareButton>
            </div>
            <div>
              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={iconSize} round />
              </FacebookMessengerShareButton>
            </div>
            <div>
              <LinkedinShareButton
                url={shareUrl}
                quote={quote}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={iconSize} round />
              </LinkedinShareButton>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
