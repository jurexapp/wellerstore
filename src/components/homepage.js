import React, { Fragment } from "react";

// component import
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
