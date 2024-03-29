import React, { useState, useEffect, useContext } from "react";
import fire from "../../auth/fbAuth";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import Meta from "../../components/layout/meta/Meta";
import { AuthContext } from "../../auth/Auth";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useToasts } from "react-toast-notifications";

export default function MyQuestion() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState();
  const { addToast } = useToasts();

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // Get document users from firestore based on user.uid
      fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get();

      setUserId(user.uid);
    } else {
      console.log("no auth found");
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      const data = await db
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      setPosts(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      // setLoading(true);
    };
    fetchData();
  }, []);

  const onDelete = (id) => {
    const questionId = id;
    // console.log(questionId);

    confirmAlert({
      title: "Confirm to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const db = fire.firestore();
            db.collection("posts")
              .doc(questionId)
              .delete();
            const message = `Question removed.`;
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

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Meta title="My Questions | KitaShare Web Application and OCR" />
      <div
        className="w-full lg:max-h-screen p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="inline-block md:flex md:justify-between">
          <div>
            <p className="text-xl">My Questions</p>
          </div>
          <div className="mr-10">
            <Link
              to="/discussion/ask-question"
              className="btn-sm text-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600 my-3 md:my-0 md:ml-3"
            >
              <span>Ask Question</span>
            </Link>
          </div>
        </div>
        <hr className="my-5" />

        {posts.map((e) => (
          <>
            <span key={e.id}>
              {e.userId === userId ? (
                <>
                  <div className="block lg:flex lg:justify-between border-b hover:bg-gray-100 p-2 cursor-pointer">
                    <div>
                      <div className="block lg:flex lg:justify-start lg:space-x-2 space-y-2 lg:space-y-0 mb-2">
                        {e.onMarkAnswered === true ? (
                          <>
                            <div className="text-center p-2 border rounded-md bg-green-500 text-white">
                              <div className="flex justify-center font-medium text-2xl">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>{" "}
                              </div>
                              <p className="text-xs">Answered</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-center p-2 border rounded-md bg-red-500 text-white">
                              <div className="flex justify-center font-medium text-2xl">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>{" "}
                              </div>
                              <p className="text-xs">No answer</p>
                            </div>
                          </>
                        )}
                        <div className="text-center p-2 border rounded-md bg-white">
                          <span>{e.votes}</span>
                          <p className="text-xs">Votes</p>
                        </div>
                        <div className="text-center p-2 border rounded-md bg-white">
                          <span>{e.views}</span>
                          <p className="text-xs">Views</p>
                        </div>
                        <div className="inline-block">
                          <Link
                            to={`/discussion/${e.category}/${e.id}`}
                            className="text-sm mr-5 mb-3 hover:underline text-blue-500 cursor-pointer"
                          >
                            {e.title}
                          </Link>
                          <span className="inline-block rounded-full h-6 text-gray-900 duration-300 border align-middle text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">
                            {e.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="opacity-75 mr-2">
                        <p className="text-xs">
                          {/* {new Date(e.createdAt).toString()}{" "} */}
                          {/* {moment(e.createdAt, 'DD/MM/YYYY', true).toString()}{" "} */}
                          {moment(e.createdAt).format("LLL")}{" "}
                        </p>
                        <p className="text-xs text-blue-500 hover:text-blue-600 transition delay-200 hover:underline cursor-pointer">
                          {e.postOwner}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span
                            className="hover:text-green-600 hover:underline cursor-pointer mx-1"
                            title="Edit"
                          >
                            <Link to={`/student/${e.id}/update`}>
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
                          <span
                            className="hover:text-red-600 hover:underline cursor-pointer mx-1"
                            title="Permanently delete"
                            onClick={() => onDelete(e.id)}
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
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </span>
          </>
        ))}
      </div>
    </>
  );
}
