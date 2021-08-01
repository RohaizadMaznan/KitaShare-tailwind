import React from "react";
import { Link } from "react-router-dom";
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
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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
        const message = `${title} is now hiding anonymously.`;
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(function() {
          window.location.reload();
        }, 4000);
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
        const message = `${title} is now showing to public.`;
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(function() {
          window.location.reload();
        }, 4000);
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onDelete = () => {
    const uploadId = id;

    confirmAlert({
      title: "Confirm to delete?",
      message: `Are you sure to do delete - ${title}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const db = fire.firestore();
            db.collection("uploads")
              .doc(uploadId)
              .delete();
            const message = `${title}, document removed.`;
            addToast(message, {
              appearance: "success",
              autoDismiss: true,
            });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
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
          <span
            className="hover:text-green-600 hover:underline cursor-pointer mx-1"
            title="Edit"
          >
            <Link to={`/admin/${id}/upload`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </span>
          {fileShowHide === true ? (
            <>
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

              <span
                className="hover:text-red-600 hover:underline cursor-pointer mx-1"
                title="Permanently delete"
                onClick={onDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </>
          ) : (
            <>
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
            </>
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
