import React, { useState, useEffect } from "react";
import fire from "../../auth/fbAuth";
import { Link, withRouter } from "react-router-dom";
import Comment from "./Comment";
import moment from "moment";
import { useToasts } from "react-toast-notifications";
import Meta from "../../components/layout/meta/Meta";

function TheQuestion({ match, history }) {
  const { addToast } = useToasts();
  const [answerQuestion, setAnswerQuestion] = useState("");
  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();

  const [loggedId, setLoggedId] = useState();

  // console.log(match, "test");

  const id = match.params.id;
  // console.log(id);

  const [posts, setPosts] = useState([]);
  // const [hide, setHide] = useState();

  const [loggedIn, setLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      setLoggedId(user.uid);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.firestore();
      const snapshot = await db
        .collection("posts")
        .doc(id)
        .get();
      const data = snapshot.data();
      setPosts(data);
      // setHide(data.onHide)
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postId = id;
  const db = fire.firestore();
  const postRef = db.collection("posts").doc(postId);

  const postVote = () => {
    console.log("Post has upvote +1");
    postRef.update({
      votes: fire.firestore.FieldValue.increment(1),
    });
  };

  const postHide = () => {
    console.log("Post is hiding");
    postRef.update({
      onHide: "true",
    });
    const message = "Post is hiding!";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const postShow = () => {
    console.log("Post has show to public");
    postRef.update({
      onHide: "false",
    });
    const message = "Post has show to public.";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const postAnswered = () => {
    console.log("Post has been answered! Congratulation");
    postRef.update({
      onMarkAnswered: "true",
    });
    const message = "Post has been answered! Congratulation!!";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const postNotAnswered = () => {
    console.log("Post has change to not answer.");
    postRef.update({
      onMarkAnswered: "false",
    });
    const message = "Post has change to not answer.";
    addToast(message, {
      appearance: "success",
      autoDismiss: true,
    });
  };

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

  // console.log("This is post uid:", userId)

  const handleComment = (e) => {
    e.preventDefault();

    if (answerQuestion === "") {
      const message = "Comment cannot be empty!";
      addToast(message, {
        appearance: "warning",
        autoDismiss: true,
      });
      return null;
    }

    fire
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .add({
        userId: userId,
        postOwner: firstName,
        createdAt: new Date().toISOString(),
        postId: id,
        comment: answerQuestion,
      })
      .then(() => {
        // console.log(`Success comment the post ${id}`);
        addToast("Comment posted!", {
          appearance: "success",
          autoDismiss: true,
        });
        window.location.reload();
      })
      .catch((err) => {
        // console.log("Unsuccess comment");
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  return (
    <>
      <Meta title={`${posts.title} | KitaShare Web Application and OCR `} />
      <div
        className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <nav className="font-bold" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/discussion/home">Home</Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            {/* <li class="flex items-center">
              <Link to="#">Second Level</Link>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li> */}
            <li>
              <Link to="/" className="text-gray-500" aria-current="page">
                {posts.title}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <Link
            to="#"
            className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
          >
            {posts.category}
          </Link>
          <p className="text-2xl">{posts.title}</p>
          <div className="inline-block space-y-5 lg:flex justify-start lg:justify-between space-x-3 mt-2 text-sm ">
            <div>
              <Link to="#" className="flex items-center">
                <img
                  src="https://miro.medium.com/max/3150/1*X6IDI9LqATYpd9KYbTWwHg.jpeg"
                  alt="avatar"
                  className="mr-2 w-8 h-8 rounded-full"
                />

                <div className="text-gray-900 font-bold text-sm hover:underline hover:text-blue-500 transition duration-200 ease-in-out">
                  {posts.postOwner}
                </div>
                <div className="text-gray-900 text-sm opacity-50">
                  &nbsp;&mdash;&nbsp; {moment(posts.createdAt).fromNow()}
                </div>
              </Link>
            </div>
            <div>
              <p className="text-sm">
                Viewed{" "}
                <span className="hover:underline cursor-pointer text-blue-500 transition duration-200 ease-in-out">
                  {posts.views}
                </span>{" "}
                times
              </p>
              <p className="text-sm">
                Voted{" "}
                <span className="hover:underline cursor-pointer text-blue-500 transition duration-200 ease-in-out">
                  {posts.votes}
                </span>{" "}
                times
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="inline-block space-y-5 justify-start lg:flex">
          <div className="w-full pr-5">
            <p>{posts.content}</p>
          </div>
          {/* <div className="w-full lg:w-1/4 bg-gray-100 p-3 shadow-md">
            <p className="font-bold">Attachment</p>
            <hr className="my-2" />
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
            >
              Attachment.pdf
            </Link>
          </div> */}
        </div>
        <hr className="my-5" />
        <div className="text-sm flex justify-start space-x-4 opacity-50 hover:opacity-100 transition duration-200 ease-in-out">
          {loggedIn ? (
            loggedId === userId ? (
              <>
                <span
                  onClick={postVote}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Vote
                </span>
                <Link
                  // to={`/discussion/update/${posts.category}/${id}`}
                  to={`/student/${id}/update`}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                >
                  Edit
                </Link>
                {/* {
            hide === true ? <span onClick={postHide}>Hide</span> : <span onClick={postShow}>Show</span>
          } */}
                {/* <span
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
                </span> */}

                {posts.onHide == "true" ? (
                  <>
                    <span
                      onClick={postShow}
                      className="hover:text-blue-600 hover:underline cursor-pointer"
                    >
                      Show
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      onClick={postHide}
                      className="hover:text-blue-600 hover:underline cursor-pointer"
                    >
                      Hide
                    </span>
                  </>
                )}

                <span
                  onClick={postAnswered}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                  alt="There is an answer."
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </span>
                <span
                  onClick={postNotAnswered}
                  className="hover:text-blue-600 hover:underline cursor-pointer"
                  alt="No answers to this question."
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                </span>
              </>
            ) : (
              <>
                <p>Not ideal user</p>
              </>
            )
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <Comment id={id} />

      <div
        className="w-full md:mr-10 p-5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white shadow-lg border-rounded"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        {loggedIn ? (
          <>
            <form onSubmit={handleComment}>
              <div>
                <p>Your Answer</p>
                <textarea
                  isrequired="true"
                  id="answerQuestion"
                  value={answerQuestion}
                  onChange={({ target }) => setAnswerQuestion(target.value)}
                  rows="10"
                  className="text-sm mt-2 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-blue-500 rounded focus:outline-none"
                ></textarea>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
                >
                  <span className="text-sm">Post Your Answer</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <p>
              <Link to="/signin" className="hover:underline text-blue-500">
                Sign in{" "}
              </Link>{" "}
              to post comment
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(TheQuestion);
