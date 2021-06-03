import React, { useState, useContext, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ChatbotTableList from "../../components/ChatbotTableList";
import Meta from "../../components/layout/meta/Meta";
import { useToasts } from "react-toast-notifications";
import { AuthContext } from "../../auth/Auth";

function ManageChatbot({ history }) {
  // const [resetForm, setResetForm] = useState("");
  const { addToast } = useToasts();

  const [replier, setReplier] = useState("");
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [trigger, setTrigger] = useState("");
  const [chatbots, setChatbots] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("chatbots")
      .add({
        replier: replier,
        number: number,
        question: question,
        trigger: trigger,
        createdAt: new Date().toISOString(),
        onHide: "false",
      })
      .then(() => {
        // console.log("Success post")
        // window.location.reload(true)
        addToast("New chatbot question has been successfully added!", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/admin/manage-chatbot");
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      const data = await db
        .collection("chatbots")
        .orderBy("number", "asc")
        .get();
      setChatbots(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      // setLoading(true);
    };
    fetchData();
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Meta title="My Chatbots | KitaShare Web Application and OCR" />
      <div data-aos="fade-up" data-aos-delay="150">
        <p className="text-xl">My Chatbot Questions</p>
        <hr className="my-5" />
        <div>
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg bg-gray-200 text-sm font-medium text-gray-700">
                <th className="w-1/12 px-4 py-2 text-left">No.</th>
                <th className="w-1/12 px-4 py-2 text-left">Trigger</th>
                <th className="w-10/12 px-4 py-2 text-left">Question</th>
                <th className="w-1/12 px-4 py-2 "></th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {/* <UploadTable /> */}
              {chatbots.map((e) => (
                <React.Fragment key={e.id}>
                  <>
                    <ChatbotTableList
                      fileShowHide={e.onHide}
                      id={e.id}
                      number={e.number}
                      trigger={e.trigger}
                      question={e.question}
                    />
                  </>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="w-full md:mr-10 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <p className="text-lg mt-5">Chatbot Config</p>
        <hr className="my-5" />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Which replier?
              </label>
              <p className="text-sm">
                Pick one replier to pop-up the chat in Chatbot Chat
              </p>
              <select
                isrequired="true"
                id="select"
                value={replier}
                onChange={({ target }) => setReplier(target.value)}
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              >
                <option value="chatbot">KitSha - Chatbot</option>
                <option value="user">User - Guest/Student</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Number of question
              </label>
              <input
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                type="text"
                id="question"
                value={number}
                onChange={({ target }) => setNumber(target.value)}
                placeholder="1"
                isrequired="true"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Question
              </label>
              <textarea
                isrequired="true"
                id="content"
                value={question}
                onChange={({ target }) => setQuestion(target.value)}
                placeholder="e.g What is your question?"
                rows="10"
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor=""
              >
                Which question will triggered?
              </label>
              <p className="text-sm">
                Pick one question to triggered during Chatbot Chat
              </p>
              <select
                isrequired="true"
                id="select"
                value={trigger}
                onChange={({ target }) => setTrigger(target.value)}
                className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
              >
                {chatbots.map((e) => (
                  <>
                    <option value={e.number}>
                      {e.number} - {e.question}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
              >
                <span className="text-sm">Add Question</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(ManageChatbot);
