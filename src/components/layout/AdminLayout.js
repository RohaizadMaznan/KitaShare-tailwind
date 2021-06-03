import React, { Component } from "react";
import Chatbot from "../Chatbot";
import Header from "./admin/Header";
import Footer from "./main/Footer";
import Sidebar2 from "./admin/Sidebar";

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
          <div className="container w-full flex flex-wrap mx-auto pt-8 lg:pt-16 mt-16">
            <div
              className=" w-full lg:w-1/5 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
              data-aos="fade-up"
              data-aos-delay="150"
            >
                <Sidebar2 />
            </div>
            {/*  Page sections */}
            <div
              className="w-full lg:w-4/5 p-3 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal border-rounded"
              data-aos="fade-up"
              data-aos-delay="150"
            >
            {this.props.children}
            </div>
          </div>

          {/*  Site footer */}
          <Footer />

          {/* Chatbot */}
          <Chatbot />
        </div>
      </>
    );
  }
}

export default Layout;
