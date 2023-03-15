import React from "react";
import SkillsBar from "../../components/SkillsBar"
import "./style.css"

function Service() {
  return (
    <>
      <div className="services">
        <h1>Services Offered</h1>
        <div className="servicesList">
          <ul>
            <li><span>»</span>Website Design</li>
            <li><span>»</span>Website Development</li>
            <li><span>»</span>Code Debugging</li>
            <li><span>»</span>Code Modernisation</li>
          </ul>
        </div>
        <div className="container">
          <h2>Skills</h2>
            <div className="skills">
              <SkillsBar name="HTML" percentage="95%" id="html-bar"/>
              <SkillsBar name="CSS" percentage="95%" id="css-bar"/>
              <SkillsBar name="JavaScript" percentage="90%" id="js-bar"/>
              <SkillsBar name="Bootstrap" percentage="75%" id="bootstrap-bar"/>
              <SkillsBar name="React" percentage="60%" id="react-bar"/>
              <SkillsBar name="Node.js" percentage="60%" id="node-bar"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service;