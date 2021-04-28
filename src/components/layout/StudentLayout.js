import React, { Component } from "react";

import Navbar from "./student/Topbar";
import Sidebar from "./student/Sidebar";

class Layout extends Component {
  constructor(props) {
    super();
  }

  render() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <div className="relative bg-blue-500 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
}

export default Layout;