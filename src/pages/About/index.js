import React from "react";
import CV from "../../components/CV";
import "./style.css"

function About() {
  return (
      <div className="about">
        <h1>About Me</h1>
        <p>Hi! I'm David and I'm studying Front End Web Development.</p>
        <p>More information about me coming soon!</p>
        <CV />
      </div>
  )
}

export default About;