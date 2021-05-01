import React, { useState } from "react";
import fire from "../auth/fbAuth";
import provider from "../auth/AuthSetting";
import { Link, withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Meta from "../components/layout/meta/Meta";

function SignIn({ history }) {
  const { addToast } = useToasts();
  const { user, setUser } = useState([]);
  const { token, setToken } = useState("");

  // Input field for sign in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState("");

  // Show password write
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      const message = "Cannot leave empty to sign in!";
      addToast(message, {
        appearance: "warning",
        autoDismiss: true,
      });
      return null;
    }

    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        fire
          .firestore()
          .collection("users")
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.data().email === "admin@kitashare.com") {
                addToast("Welcome back admin!", {
                  appearance: "success",
                  autoDismiss: true,
                });
                history.push("/admin/dashboard");
              } else {
                addToast("Hi, welcome back!", {
                  appearance: "success",
                  autoDismiss: true,
                });
                history.push("/student/dashboard");
              }
            });
          });
        console.log("Successfully login");
        //router.push("/")
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
    setEmail("");
    setPassword("");
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();

    console.log(":D");
    fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.refreshToken;
        const user = result.user;
        console.log(user);
        setUser(user);
        setToken(token);
        // console.log("Logged in!")
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message;
        console.log("Error code: " + errorCode + "Menssage: " + errorMess);

        const errEmail = err.email;
        const errCredential = err.credential;
        console.log(
          "Email error" + errEmail + "Credential error: " + errCredential
        );
      });

    console.log(token);
    console.log(user);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
    <Meta title="Sign in | KitaShare Web Application and OCR" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1" data-aos="zoom-y-out">
              Welcome back. We exist to make student life better.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form data-aos="zoom-y-out" data-aos-delay="150">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                    data-aos="zoom-y-out"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    value={email}
                    name="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Email address"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link
                      to="reset-password"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Having trouble signing in?
                    </Link>
                  </div>

                  <div className="relative text-gray-600">
                    <input
                      id="password"
                      value={password}
                      name="password"
                      type={show ? "text" : "password"}
                      className="form-input w-full text-gray-800"
                      placeholder="Password"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <span
                      onClick={handleClick}
                      className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
                    >
                      {show ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-600 ml-2">
                        Keep me signed in
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                    onClick={handleLogin}
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-300 flex-grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-600 italic">Or</div>
              <div
                className="border-t border-gray-300 flex-grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <form>
              {/* <div className="flex flex-wrap -mx-3 mb-3" data-aos="zoom-y-out" data-aos-delay="250">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                      </button>
                    </div>
                  </div> */}
              <div
                className="flex flex-wrap -mx-3"
                data-aos="zoom-y-out"
                data-aos-delay="350"
              >
                <div className="w-full px-3">
                  <button
                    onClick={signInWithGoogle}
                    className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                  >
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div
              className="text-gray-600 text-center mt-6"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              Don’t you have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:underline transition duration-150 ease-in-out"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(SignIn);
