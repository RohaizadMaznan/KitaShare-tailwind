import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import PastAnswerList from "./PastAnswerList";

export default function PastAnswerCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      const data = await db
        .collection("posts")
        .orderBy("createdAt", "desc")
        .limit(5)
        .get();
      setPosts(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="font-bold text-gray-800">Past Answers</p>
      <hr className="border-b my-2 border-gray-200" />
      <div>
        <div className="inline-block">
          {/* List of past answer questions - This will need to be loop through firestore later on */}
          {posts.map((e) => (
            <span key={e.id}>
              { e.onMarkAnswered === true ? (
                <>
                  <PastAnswerList label={e.title} url={`/discussion/${e.category}/${e.id}`} />
                </>
              ) : (
                <>
                  
                </>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
