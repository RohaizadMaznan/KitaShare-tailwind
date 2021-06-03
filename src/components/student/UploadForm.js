import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import fire from "../../auth/fbAuth";
import { useToasts } from "react-toast-notifications";

function UploadFormSubmit({ ocrText, history }) {
  const { addToast } = useToasts();
  // console.log(`This is from upload form: ${ocrText}`);

  const [title, setTitle] = useState("");
  const [setOcrTextnew] = useState();
  const [course, setCourse] = useState("");
  const [code, setCode] = useState("");
  const [university, setUniversity] = useState("");

  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("uploads")
      .add({
        userId: userId,
        postOwner: firstName,
        createdAt: new Date().toISOString(),
        courseCode: code,
        courseName: course,
        universityName: university,
        fileTitle: title,
        ocrTextCaptured: ocrText,
        onHide: "false",
        onMarkAnswered: "false",
        views: 0,
        votes: 0,
      })
      .then(() => {
        // console.log("Success a file post");
        // window.location.reload(true)
        addToast("Success! You have upload the handnote.", { appearance: "success", autoDismiss: true });
        history.push("/")
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  return (
    <>
      <div
        className="w-full mb-10 lg:mb-32 lg:max-h-screen p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="w-full p-5 shadow-lg space-y-2 text-left bg-white rounded-md">
          <p>File information</p>
          <hr />
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/12">
                <label
                  className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                  htmlFor="inline-full-name"
                >
                  File title
                </label>
              </div>
              <div className="md:w-10/12">
                <input
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                  name="title"
                  id="title"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                  type="text"
                  placeholder="e.g. Chapter 1 Software Engineering Notes"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/12">
                <label
                  className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                  htmlFor="inline-full-name"
                >
                  Image - Parsed text
                </label>
              </div>
              <div className="md:w-10/12">
                <textarea
                  isrequired="true"
                  name="desc"
                  id="desc"
                  value={ocrText}
                  onChange={({ target }) => setOcrTextnew(target.value)}
                  placeholder="Write here..."
                  rows="10"
                  disabled
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                ></textarea>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/12">
                <label
                  className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                  htmlFor="inline-full-name"
                >
                  Course name
                </label>
              </div>
              <div className="md:w-10/12">
                <input
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                  name="course"
                  id="course"
                  value={course}
                  onChange={({ target }) => setCourse(target.value)}
                  type="text"
                  placeholder="e.g. Software Engineering"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/12">
                <label
                  className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                  htmlFor="inline-full-name"
                >
                  Course code
                </label>
              </div>
              <div className="md:w-10/12">
                <input
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                  name="code"
                  id="code"
                  value={code}
                  onChange={({ target }) => setCode(target.value)}
                  type="text"
                  placeholder="e.g. SCSJ 3323"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-2/12">
                <label
                  className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                  htmlFor="inline-full-name"
                >
                  Which university?
                </label>
              </div>
              <div className="md:w-10/12">
                <input
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                  name="university"
                  id="university"
                  value={university}
                  onChange={({ target }) => setUniversity(target.value)}
                  type="text"
                  placeholder="e.g. University Teknologi Malaysia"
                />
              </div>
            </div>
            <div className="mb-2 flex justify-end">
              <button
                type="submit"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-md">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(UploadFormSubmit)