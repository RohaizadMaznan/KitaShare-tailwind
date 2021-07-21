import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import fire from "../../auth/fbAuth";
import Meta from "../../components/layout/meta/Meta";
import ProfileInput from "../../components/student/ProfileInput";

const initialValues = {
  courseCode: "",
  courseName: "",
  fileTitle: "",
  ocrTextCaptured: "",
  universityName: "",
};

function UpdateUpload({ history }) {
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
        .collection("uploads")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const upload = doc.data();
            setStates({
              courseCode: upload.courseCode,
              courseName: upload.courseName,
              fileTitle: upload.fileTitle,
              ocrTextCaptured: upload.ocrTextCaptured,
              universityName: upload.universityName,
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
      .collection("uploads")
      .doc(id)
      .update({
        courseCode: states.courseCode,
        courseName: states.courseName,
        fileTitle: states.fileTitle,
        ocrTextCaptured: states.ocrTextCaptured,
        universityName: states.universityName,
      })
      .then(() => {
        // console.log("Success post")
        // window.location.reload(true)
        addToast("Successfully update!", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/student/my-upload");
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  return (
    <div>
      <Meta
        title={`Update - ${states.fileTitle} | KitaShare Web Application and OCR`}
      />
      <div
        className="lg:pl-6 space-y-10 text-gray-900"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <div className="inline-block md:flex md:justify-between">
            <div>
              <p className="text-2xl">Update</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <form autoComplete="off" onSubmit={handleUpdate}>
              <ProfileInput
                inputType="text"
                inputName="id"
                label="ID Upload (disabled)"
                value={id}
                onChange={handleInputChange}
                disable="true"
              />
              <ProfileInput
                inputType="text"
                inputName="fileTitle"
                label="File Title"
                value={states.fileTitle}
                onChange={handleInputChange}
              />
              <ProfileInput
                inputType="text"
                inputName="courseCode"
                label="Course Code"
                value={states.courseCode}
                onChange={handleInputChange}
              />
              <ProfileInput
                inputType="text"
                inputName="courseName"
                label="Course Name"
                value={states.courseName}
                onChange={handleInputChange}
              />
              <ProfileInput
                inputType="text"
                inputName="universityName"
                label="This file from University"
                value={states.universityName}
                onChange={handleInputChange}
              />
              {/* <ProfileInput
                inputType="text"
                inputName="ocrTextCaptured"
                label="OCR Text Captured"
                value={states.ocrTextCaptured}
                onChange={handleInputChange}
              /> */}

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-3/12">
                  <label
                    className="block text-gray-700 mb-1 md:mb-0 md:text-right pr-5"
                    htmlFor="inline-full-name"
                  >
                    OCR Text Captured
                  </label>
                </div>
                <div className="md:w-9/12">
                  <textarea
                    value={states.ocrTextCaptured}
                    onChange={handleInputChange}
                    name="ocrTextCaptured"
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

export default withRouter(UpdateUpload);
