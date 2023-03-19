import React from "react";
import ProjectCard from "../../components/ProjectCard"
import "./style.css"

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="cardSection">
        <ProjectCard className="project1 flexCard" href="https://github.com/dalvat/animaletics-api-app" title="Animaletics App (Collaboration)" category="HTML CSS Javascript"/>
        <ProjectCard className="project2 flexCard" href="https://github.com/dalvat/team-profile-generator" title="Team Profile Generator" category="Javascript node.js cmd"/>
        <ProjectCard className="project3 flexCard" href="https://github.com/dalvat/readme-generator-node" title="Readme Generator" category="Javascript node.js cmd"/>
        <ProjectCard className="project4 flexCard" href="https://github.com/dalvat/daily-planner-app" title="Daily Planner" category="HTML CSS JavaScript"/>
        <ProjectCard className="project5 flexCard" href="https://github.com/dalvat/coding-quiz" title="Coding Quiz" category="HTML CSS JavaScript"/>
      </div>
    </>
  )
}

export default Portfolio;