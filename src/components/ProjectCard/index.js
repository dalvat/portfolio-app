import React from "react";

function ProjectCard(props) {
  return (
    <>
      <a href={props.href} className={props.className} target="_blank">
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