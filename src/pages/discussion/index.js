import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link } from "react-router-dom";
import PastAnswerCard from "../../components/discussion/PastAnswerCard";
import QuestionList from "../../components/discussion/QuestionList";
import moment from "moment";

function Index() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

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

  const postView = (postId) => {
    // console.log("postView", postId);
    const db = fire.firestore();
    // console.log(db)
    const postRef = db.collection("posts").doc(postId);

    postRef.update({
      views: fire.firestore.FieldValue.increment(1),
    });
  };

  return (
    <>
      <div
        className="w-full lg:w-3/4 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="inline-block md:flex md:justify-between">
          <div>
            <p className="text-2xl">Top Questions</p>
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
        <hr className="border-b my-5 border-gray-200" />
        <div>
          <div>
            {!posts ? (
              <p>Loading...</p>
            ) : (
              posts.map((e) => (
                <span onClick={() => postView(e.id)} key={e.id}>
                  {e.onHide === true ? (
                    ""
                  ) : (
                    <QuestionList
                      id={e.id}
                      title={e.title}
                      content={e.content}
                      tag={e.category}
                      view={e.views}
                      vote={e.votes}
                      answer={e.onMarkAnswered}
                      onHide={e.onHide}
                      postOwner={e.postOwner}
                      avatar="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                      // date={moment(e.createdAt).format("LLL")}
                      date={moment(e.createdAt).fromNow()}
                    />
                  )}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
      <div
        className="w-full h-full lg:w-1/4 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 border rounded bg-white shadow-lg leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <PastAnswerCard />
      </div>
    </>
  );
}

export default Index;
