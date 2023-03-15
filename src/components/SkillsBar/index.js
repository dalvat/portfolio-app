import React from "react";
import "./style.css"

function SkillsBar(props) {
  return (
    <>
      <div className="skillDetail">
        <span>{props.name}</span>
        <span>{props.percentage}</span>
      </div>
      <div className="skillBar">
        <div id={props.id}></div>
      </div>
    </>
  )
}

export default SkillsBar