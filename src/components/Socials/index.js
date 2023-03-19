import React from "react";
import "./style.css"

function Socials(props) {
  return (
    <>
      <div>
        <a className={props.className} href={props.href}></a>
        <p>{props.text}</p>
      </div>
    </>
  )
}

export default Socials