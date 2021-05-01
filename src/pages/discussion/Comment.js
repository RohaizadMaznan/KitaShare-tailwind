import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Comment({ id }) {
  const postId = id;
  // console.log(`This is from Comment.js page the id found is ${postId}`);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      const db = fire.firestore();
      const data = await db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("createdAt", "desc")
        .get();

      // const shot = data.onSnapshot((doc) => {
      //   return { ...doc.data(), id: doc.id };
      // })

      // setComments(shot)

      setComments(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div>
          <p>Commend Section</p>
          <hr className="my-2" />

          {comments.map((e) => (
            <div className="w-full inline-block" key={e.id}>
              <div className="w-full inline-block space-y-5">
                <div className="w-full">
                  <p>{e.comment}</p>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm flex justify-start space-x-4 opacity-50 hover:opacity-100 transition duration-200 ease-in-out">
                    {/* <span
                  onClick={postVote}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Vote
                </span>
                <Link
                  to="/"
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Edit
                </Link>
                <span
                  onClick={postHide}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Hide
                </span>
                <span
                  onClick={postShow}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Show
                </span>
                <span
                  onClick={postAnswered}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Answered
                </span>
                <span
                  onClick={postNotAnswered}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  No answer
                </span> */}
                  </div>
                  <div>
                    <Link to="#" className="flex items-center">
                      <img
                        src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                        alt="avatar"
                        className="mr-2 w-8 h-8 rounded-full"
                      />

                      <div className="text-gray-900 font-bold text-sm hover:underline hover:text-blue-500 transition duration-200 ease-in-out">
                        {e.postOwner}
                      </div>
                      <div className="text-gray-900 text-sm opacity-50">
                        &nbsp;&mdash;&nbsp; {moment(e.createdAt).startOf('hour').fromNow()}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
