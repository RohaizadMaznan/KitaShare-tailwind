import React, { Component } from "react";
import Header from "./main/Header";

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
          <main className="flex-grow">
            {/*  Page sections */}
            {this.props.children}
          </main>
        </div>
      </>
    );
  }
}

export default Layout;
