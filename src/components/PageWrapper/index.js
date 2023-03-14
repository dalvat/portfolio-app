import React from "react";
import "./style.css";

function PageWrapper(props) {
  return <main className="pageWrapper">{props.children}</main>;
}

export default PageWrapper;
