import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link } from "react-router-dom";
import moment from "moment";

export default function MyQuestion() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState();

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

  return (
    <>
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
                    <div className="opacity-75">
                      <p className="text-xs">
                        {/* {new Date(e.createdAt).toString()}{" "} */}
                        {/* {moment(e.createdAt, 'DD/MM/YYYY', true).toString()}{" "} */}
                        {moment(e.createdAt).format("LLL")}{" "}
                      </p>
                      <p className="text-xs text-blue-500 hover:text-blue-600 transition delay-200 hover:underline cursor-pointer">
                        {e.postOwner}
                      </p>
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
