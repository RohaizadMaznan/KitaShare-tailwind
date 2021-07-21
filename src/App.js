import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import { ToastProvider } from "react-toast-notifications";
// import CookieConsent from "react-cookie-consent";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

import MainLayout from "./components/layout/MainLayout";
import MainNoFooter from "./components/layout/MainNoFooter";
import DocumentationLayout from "./components/layout/DocumentationLayout";
import SecondaryLayout from "./components/layout/SecondaryLayout";
// import StudentLayout from "./components/layout/StudentLayout";
import StudentLayout2 from "./components/layout/StudentLayout2";
import AdminLayout from "./components/layout/AdminLayout";
import Documentation from "./pages/documentation/index";
import StudentDashboard from "./pages/student/index";
import AgreementPrivacy from "./pages/documentation/AgreementPrivacy";
import TermConditions from "./pages/documentation/TermConditions";
import OCRDocs from "./pages/documentation/ocr";
import Chatbot from "./pages/documentation/Chatbot";
// import Test from "./pages/Test";

import Discussion from "./pages/discussion/index";
import AskQuestion from "./pages/discussion/AskQuestion";
import TheQuestion from "./pages/discussion/TheQuestion";
import SuccessPostQuestion from "./pages/discussion/Success";

import StudentProfile from "./pages/student/Profile";
import MyQuestion from "./pages/student/MyQuestion";
import MyUpload from "./pages/student/MyUpload";
import Upload from "./pages/student/Upload";
import UpdateUpload from "./pages/student/UpdateUpload";
import UpdateQuestion from "./pages/student/UpdateQuestion";

import AdminIndex from "./pages/admin/index";
import ManageChatbot from "./pages/admin/ManageChatbot";
import ManageHandnotes from "./pages/admin/ManageHandnotes";
import AdminMyQuestion from "./pages/admin/MyQuestions";
import AdminMyUpload from "./pages/admin/MyUploads";

import HandnoteContent from "./pages/handnote/index";

import Search from "./pages/Search";
import UploadForm from "./pages/student/UploadForm";
import { AuthProvider } from "./auth/Auth";
import Profile from "./pages/admin/Profile";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <ToastProvider>
        <AuthProvider>
          <Switch>
            <AppRoute exact path="/" layout={MainLayout} component={Home} />
            <AppRoute path="/signin" layout={MainNoFooter} component={SignIn} />
            <AppRoute path="/signup" layout={MainNoFooter} component={SignUp} />
            <AppRoute
              path="/reset-password"
              layout={MainNoFooter}
              component={ResetPassword}
            />

            {/* Documentation */}
            <AppRoute
              path="/documentation/about"
              layout={DocumentationLayout}
              component={Documentation}
            />
            <AppRoute
              path="/documentation/agreement-of-privacy"
              layout={DocumentationLayout}
              component={AgreementPrivacy}
            />
            <AppRoute
              path="/documentation/terms-and-condition"
              layout={DocumentationLayout}
              component={TermConditions}
            />
            <AppRoute
              path="/documentation/ocr"
              layout={DocumentationLayout}
              component={OCRDocs}
            />
            <AppRoute
              path="/documentation/chatbot"
              layout={DocumentationLayout}
              component={Chatbot}
            />

            {/* Discussion */}
            <AppRoute
              path="/discussion/home"
              layout={SecondaryLayout}
              component={Discussion}
            />
            <AppRoute
              path="/discussion/ask-question"
              layout={SecondaryLayout}
              component={AskQuestion}
            />
            <AppRoute
              path="/discussion/:tag/:id"
              layout={SecondaryLayout}
              component={TheQuestion}
            />
            <AppRoute
              path="/discussion/successfully-submit"
              layout={SecondaryLayout}
              component={SuccessPostQuestion}
            />
            


            <AppRoute
              path="/student/dashboard"
              layout={StudentLayout2}
              component={StudentDashboard}
            />
            <AppRoute
              path="/student/profile"
              layout={StudentLayout2}
              component={StudentProfile}
            />
            <AppRoute
              path="/student/my-question"
              layout={StudentLayout2}
              component={MyQuestion}
            />
            <AppRoute
              path="/student/my-upload/update/:id"
              layout={StudentLayout2}
              component={UpdateUpload}
            />
            <AppRoute
              path="/student/my-upload"
              layout={StudentLayout2}
              component={MyUpload}
            />
            <AppRoute
              path="/student/upload-file"
              layout={SecondaryLayout}
              component={Upload}
            />
            <AppRoute
              path="/student/start-upload"
              layout={SecondaryLayout}
              component={UploadForm}
            />
            <AppRoute
              path="/student/:id/update"
              layout={StudentLayout2}
              component={UpdateQuestion}
            />

            {/* Search page */}
            <AppRoute
              path="/search"
              layout={SecondaryLayout}
              component={Search}
            />

            {/* Admin page */}
            <AppRoute
              path="/admin/dashboard"
              layout={AdminLayout}
              component={AdminIndex}
            />
            <AppRoute
              path="/admin/manage-chatbot"
              layout={AdminLayout}
              component={ManageChatbot}
            />
            <AppRoute
              path="/admin/manage-handnotes"
              layout={AdminLayout}
              component={ManageHandnotes}
            />
            <AppRoute
              path="/admin/profile"
              layout={AdminLayout}
              component={Profile}
            />
            <AppRoute
              path="/admin/my-question"
              layout={AdminLayout}
              component={AdminMyQuestion}
            />
            <AppRoute
              path="/admin/my-upload"
              layout={AdminLayout}
              component={AdminMyUpload}
            />

            <AppRoute
              path="/handnote/ocr/:id"
              layout={SecondaryLayout}
              component={HandnoteContent}
            />

            {/* <AppRoute path="/test" layout={SecondaryLayout} component={Test} /> */}
          </Switch>
        </AuthProvider>
        {/* <CookieConsent
          buttonStyle={{
            color: "#000",
            backgroundColor: "#fff",
            fontSize: "16px",
            padding: "8px 50px",
            borderRadius: "10px",
          }}
          style={{
            backgroundColor: "#b1becd",
            // boxShadow: "1px -1px 30px #e4e4e4",
          }}
          debug={true}
        >
          <div className="flex justify-start">
            <div className="mr-5">
              <img
                className="mx-auto w-5 h-auto mt-2"
                src={require("./images/cookies.svg")}
                alt="Success"
              />{" "}
            </div>
            <div>
              <p className="mt-2">
                Give us cookies. See our{" "}
                <a
                  href="/documentation/agreement-of-privacy"
                  className="underline text-blue-500 hover:text-blue-600"
                >
                  agreement of privacy
                </a>{" "}
                for more.
              </p>
            </div>
          </div>
        </CookieConsent> */}
      </ToastProvider>
    </>
  );
}

export default App;
