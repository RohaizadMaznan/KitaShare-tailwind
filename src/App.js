import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

import MainLayout from "./components/layout/MainLayout";
import MainNoFooter from "./components/layout/MainNoFooter";
import DocumentationLayout from "./components/layout/DocumentationLayout";
import SecondaryLayout from "./components/layout/SecondaryLayout";
import Documentation from "./pages/documentation/index";
import AgreementPrivacy from "./pages/documentation/AgreementPrivacy";
import TermConditions from "./pages/documentation/TermConditions";
import OCRDocs from "./pages/documentation/ocr";
import Chatbot from "./pages/documentation/Chatbot";
import Test from "./pages/Test";

import Discussion from "./pages/discussion/index";
import AskQuestion from "./pages/discussion/AskQuestion";

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
          path="/test"
          layout={SecondaryLayout}
          component={Test}
        />
      </Switch>
    </>
  );
}

export default App;