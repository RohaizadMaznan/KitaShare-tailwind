import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import UploadTable from "../../components/student/UploadTable";

export default function MyUpload() {
  const [uploads, setUploads] = useState([]);
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
        .collection("uploads")
        .orderBy("createdAt", "desc")
        .get();
      setUploads(
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
        <p className="text-xl">My Uploads</p>
        <hr className="my-5" />
        <div>
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg bg-gray-200 text-sm font-medium text-gray-700">
                <th className="w-10/12 px-4 py-2 text-left">Name</th>
                <th className="w-1/12 px-4 py-2 ">Anonymous</th>
                <th className="w-1/12 px-4 py-2 ">Share</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {/* {!uploads && <>No post found!</>} */}
              {uploads.map((e) => (
                <React.Fragment key={e.id}>
                  {e.userId === userId ? (
                    <>
                      <UploadTable
                        fileShowHide={e.onHide}
                        id={e.id}
                        title={e.fileTitle}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
