import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import fire from "../../auth/fbAuth";
import Meta from "../../components/layout/meta/Meta";
import ProfileInput from "../../components/student/ProfileInput";

const initialValues = {
  category: "",
  content: "",
  title: "",
};

function UpdateQuestion({ history }) {
  const { id } = useParams();
  // console.log(id);
  const { addToast } = useToasts();

  const [states, setStates] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStates({
      ...states,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      await db
        .collection("posts")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const upload = doc.data();
            setStates({
              category: upload.category,
              content: upload.content,
              title: upload.title,
            });
          } else {
            console.log("No such document!");
            // alert("No such document!");
          }
        });
      // setLoading(true);
    };
    fetchData();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("posts")
      .doc(id)
      .update({
        category: states.category,
        content: states.content,
        title: states.title,
      })
      .then(() => {
        // console.log("Success post")
        // window.location.reload(true)
        addToast("Successfully update!", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/student/my-question");
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  return (
    <div>
      <Meta
        title={`Update - ${states.title} | KitaShare Web Application and OCR`}
      />
      <div
        className="lg:pl-6 space-y-10 text-gray-900"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <div className="inline-block md:flex md:justify-between">
            <div>
              <p className="text-2xl">Update Question</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <form autoComplete="off" onSubmit={handleUpdate}>
              <ProfileInput
                inputType="text"
                inputName="id"
                label="ID Question (disabled)"
                value={id}
                onChange={handleInputChange}
                disable="true"
              />
              <ProfileInput
                inputType="text"
                inputName="title"
                label="Question Title"
                value={states.title}
                onChange={handleInputChange}
              />
              <ProfileInput
                inputType="text"
                inputName="category"
                label="Category"
                value={states.category}
                onChange={handleInputChange}
              />
              {/* <ProfileInput
                inputType="text"
                inputName="content"
                label="Content"
                value={states.content}
                onChange={handleInputChange}
              /> */}

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-3/12">
                  <label
                    className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                    htmlFor="inline-full-name"
                  >
                    Your question/content
                  </label>
                </div>
                <div className="md:w-9/12">
                  <textarea
                    value={states.content}
                    onChange={handleInputChange}
                    name="content"
                    rows={5}
                    className="bg-gray-100 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              <div className="mb-2 flex justify-end">
                <button
                  type="submit"
                  className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
                >
                  <span className="text-sm">Kemaskini</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(UpdateQuestion);
