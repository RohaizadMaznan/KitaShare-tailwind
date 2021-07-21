import React, {useState, useContext} from "react";
import fire from "../../auth/fbAuth";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
import PastAnswerCard from "../../components/discussion/PastAnswerCard";
import { useToasts } from "react-toast-notifications";
import { AuthContext } from "../../auth/Auth";

function AskQuestion({history}) {
  const [tag, setTag] = useState("");
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();

  // const [resetForm, setResetForm] = useState("");
  const { addToast } = useToasts();

  

  // const [urlQuestion, setUrlQuestion] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // Get document users from firestore based on user.uid
      fire.firestore().collection("users").doc(user.uid).get()
      .then((doc) => {
        // console.log("Document data:", doc.data().firstName)
        setFirstName(doc.data().firstName)
      })
      
      setUserId(user.uid);
      //setRole(user.role)
    } else {
      console.log("none")
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("posts")
      .add({
        userId: userId,
        postOwner: firstName,
        createdAt: new Date().toISOString(),
        category: tag,
        title: question,
        content: content,
        urlQuestion: "none",
        onHide: "false",
        onMarkAnswered: "false",
        views: 0,
        votes: 0,
      })
      .then(()=> {
        // console.log("Success post")
        // window.location.reload(true)
        addToast("Question has successfully posted in the discussion!", { appearance: "success", autoDismiss: true });
        history.push("/discussion/successfully-submit")
      })
      .catch(err => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      })
  };

  const { currentUser } = useContext(AuthContext);

  if(!currentUser) {
    return <Redirect to="/" />
  }

  return (
    <>
      <div
        className="w-full lg:w-3/5 md:mr-10 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <p className="text-xl">Ask a public question</p>
        </div>
        <hr className="border-b my-5 border-gray-200" />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Title
              </label>
              <p className="text-sm">
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                type="text"
                id="question"
                value={question}
                onChange={({ target }) => setQuestion(target.value)}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                isrequired="true"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Body
              </label>
              <p className="text-sm">
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                isrequired="true"
                id="content"
                value={content}
                onChange={({ target }) => setContent(target.value)}
                placeholder="Write here..."
                rows="10"
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Category
              </label>
              <p className="text-sm">
                Pick one tag category suit your question
              </p>
              <select
                isrequired="true"
                id="select"
                value={tag}
                onChange={({ target }) => setTag(target.value)}
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              >
                <option value="programming">Programming</option>
                <option value="exercise">Exercise</option>
              </select>
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-sm">Submit your question</span>
              </button>
            </div>
          </form>
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

export default withRouter(AskQuestion)
