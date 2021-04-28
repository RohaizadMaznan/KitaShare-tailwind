import React, { Component } from "react";
import Sidebar from "./documentation/Sidebar";
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
            <Sidebar />
            {/*  Page sections */}
            <div className="w-full lg:w-4/5 p-8 mt-6 mb-10 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-200 shadow-lg border-rounded" data-aos="fade-left" data-aos-delay="150">
              {this.props.children}
            </div>
          </div>

          {/*  Site footer */}
        </div>
      </>
    );
  }
}

export default Layout;
