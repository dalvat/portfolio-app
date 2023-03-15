import React from "react";

function ProjectCard(props) {
  return (
    <>
      <a href={props.href} className="project1 flexCard">
        <div>
          <h3>{props.title}
            <p>{props.category}</p>
          </h3>
        </div>
      </a>
    </>
  )
}

export default ProjectCard