import React, { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";
import LoginForm from "./loginform";

function Login() {
  return (
    <Fragment>
      <Header />
      <LoginForm />
      <Footer />
    </Fragment>
  );
}

export default Login;
