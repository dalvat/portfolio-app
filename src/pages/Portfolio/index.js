import React from "react";
import ProjectCard from "../../components/ProjectCard"
import "./style.css"

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="cardSection">
        <ProjectCard href="#" title="Placeholder 1" category="Category 1"/>
        <ProjectCard href="#" title="Placeholder 2" category="Category 2"/>
        <ProjectCard href="#" title="Placeholder 3" category="Category 3"/>
        <ProjectCard href="#" title="Placeholder 4" category="Category 4"/>
        <ProjectCard href="#" title="Placeholder 5" category="Category 5"/>
      </div>
    </>
  )
}

export default Portfolio;