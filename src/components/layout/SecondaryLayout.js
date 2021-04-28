import React, { Component } from "react";
import Chatbot from "../Chatbot";
import Header from "./documentation/Header";

class Layout extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/*  Site header */}
          <Header />

          {/*  Page content */}
          <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
            {/*  Page sections */}
            {this.props.children}
          </div>

          {/* Chatbot */}
          <Chatbot />
        </div>
      </>
    );
  }
}

export default Layout;
