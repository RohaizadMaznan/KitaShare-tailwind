import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import Meta from "../../components/layout/meta/Meta";
import { useToasts } from "react-toast-notifications";

function HandnoteContent({ match, history }) {
  const { addToast } = useToasts();
  // const [answerQuestion, setAnswerQuestion] = useState("");
  const [userId, setUserId] = useState();

  const [loggedId, setLoggedId] = useState();

  // console.log(match, "test");

  const id = match.params.id;
  // console.log(id);

  const [uploads, setUploads] = useState([]);
  // const [hide, setHide] = useState();

  const [loggedIn, setLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      setLoggedId(user.uid);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      const snapshot = await db
        .collection("uploads")
        .doc(id)
        .get();
      const data = snapshot.data();
      setUploads(data);
      // setHide(data.onHide)
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postId = id;
  const db = fire.firestore();
  const postRef = db.collection("uploads").doc(postId);

  const uploadHide = () => {
    console.log("Upload content is hiding");
    postRef.update({
      onHide: "true",
    });

    const message = "Upload content is hiding!";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const uploadShow = () => {
    console.log("Upload content has show to public");
    postRef.update({
      onHide: "false",
    });

    const message = "Upload content has show to public.";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // Get document users from firestore based on user.uid
      fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          // console.log("Document data:", doc.data().firstName)
          // setFirstName(doc.data().firstName);
        });

      setUserId(user.uid);
      //setRole(user.role)
    } else {
      console.log("none");
    }
  });

  return (
    <>
      <Meta
        title={`${uploads.fileTitle} | KitaShare Web Application and OCR `}
      />
      <div
        className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <nav className="font-bold" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/discussion/home">Home</Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <Link to="/" className="text-gray-500" aria-current="page">
                {uploads.fileTitle}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <Link
            to="#"
            className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
          >
            Uploaded Handnotes
          </Link>
          <p className="text-2xl">{uploads.fileTitle}</p>
          <div className="inline-block space-y-5 lg:flex justify-start lg:justify-between space-x-3 mt-2 text-sm ">
            <div>
              <Link to="#" className="flex items-center">
                <img
                  src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                  alt="avatar"
                  className="mr-2 w-8 h-8 rounded-full"
                />

                <div className="text-gray-900 font-bold text-sm hover:underline hover:text-blue-500 transition duration-200 ease-in-out">
                  {uploads.postOwner}
                </div>
                <div className="text-gray-900 text-sm opacity-50">
                  &nbsp;&mdash;&nbsp; {moment(uploads.createdAt).fromNow()}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="inline-block space-y-5 justify-start lg:flex">
          <div className="w-full pr-5">
            <p>{uploads.ocrTextCaptured}</p>

            <div className="flex justify-end">
              <Link
                to={`/handnote/export/${id}`}
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 ml-3"
              >
                <span>Download as PDF</span>
              </Link>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/4 bg-gray-100 p-3 shadow-md">
            <p className="font-bold">Attachment</p>
            <hr className="my-2" />
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
            >
              Attachment.pdf
            </Link>
          </div> */}
        </div>
        <hr className="my-5" />
        <div className="text-sm flex justify-start space-x-4 opacity-50 hover:opacity-100 transition duration-200 ease-in-out">
          {loggedIn ? (
            loggedId === userId ? (
              <>
                <Link
                  to={`/admin/${id}/upload`}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Edit
                </Link>
                {/* {
            hide === true ? <span onClick={postHide}>Hide</span> : <span onClick={postShow}>Show</span>
          } */}
                {uploads.onHide === "true" ? (
                  <>
                    <span
                      onClick={uploadShow}
                      className="hover:text-blue-600 hover:underline cursor-pointer"
                    >
                      Show
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      onClick={uploadHide}
                      className="hover:text-blue-600 hover:underline cursor-pointer"
                    >
                      Hide
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <p>Not ideal user</p>
              </>
            )
          ) : (
            <p>
              <Link to="/signin" className="hover:underline text-blue-500">
                Sign in{" "}
              </Link>{" "}
              to vote up
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default withRouter(HandnoteContent);
