import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
// import { useToasts } from "react-toast-notifications";
import Meta from "../../components/layout/meta/Meta";
import Pdf from "react-to-pdf";

function ExportPDF({ match, history }) {
  // const { addToast } = useToasts();
  // const [answerQuestion, setAnswerQuestion] = useState("");
  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();

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
          setFirstName(doc.data().firstName);
        });

      setUserId(user.uid);
      //setRole(user.role)
    } else {
      console.log("none");
    }
  });

  const ref = React.createRef();

  return (
    <>
      <Meta
        title={`Export to PDF | ${uploads.fileTitle} | KitaShare Web Application and OCR `}
      />
      <div
        className="w-full justify-center flex m-0 p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="w-2/3 p-5" ref={ref}>
          <div className="flex justify-between mb-5">
            <div className="pl-4 flex items-center">
              {/* Site branding */}
              <div className="flex-shrink-0 mr-4">
                {/* Logo */}
                <Link to="/" className="block" aria-label="Cruip">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="21.152%"
                        cy="86.063%"
                        fx="21.152%"
                        fy="86.063%"
                        r="79.941%"
                        id="header-logo"
                      >
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                      </radialGradient>
                    </defs>
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#header-logo)"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
              <Link
                className="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
                to="/"
              >
                KitaShare
              </Link>
            </div>
            <div className="pr-4 text-sm text-gray-500">
                www.kitashare.com
            </div>
          </div>
          <div>
            <p className="text-l text-center">Title</p>
            <p className="text-2xl font-bold text-center">
              {uploads.fileTitle}
            </p>
          </div>

          <hr className="my-5" />

          <div>
            <p className="text-l text-center">Content</p>
            <p className="text-l mt-2">{uploads.ocrTextCaptured}</p>
          </div>

          <hr className="my-5" />

          <div className="flex justify-end">
            <div className="text-gray-400 text-center">
              <p className="text-sm ">Copyright</p>
              <p className="text-xs mt-2">
                This is a copy of the original handnote that uploaded by a
                student for other user uses. Either for study, research,
                reference, fast notes, and etc that could benefitting you and
                the others. Please read our terms and conditions{" "}
                <Link
                  to="/documentation/terms-and-condition"
                  className="hover:underline cursor-pointer text-blue-500 transition duration-200 ease-in-out"
                >
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-center m-0 p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <Pdf targetRef={ref} filename={`${uploads.fileTitle}.pdf`}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 ml-3 "
            >
              Capture as PDF
            </button>
          )}
        </Pdf>
      </div>
    </>
  );
}

export default withRouter(ExportPDF);
