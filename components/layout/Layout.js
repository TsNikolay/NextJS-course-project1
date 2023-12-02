import React, { Fragment } from "react";
import MainHeader from "./Main-header";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
