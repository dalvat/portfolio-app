import React from "react";
import "./style.css";

function CV() {

  const downloadCV = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a');
        link.setAttribute('class', 'CV')
        link.href = blobURL;
        link.setAttribute('download', 'Content Coming Soon.pdf')
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
  }

  return (
    <div id="cv-div">
      <h2>My CV</h2>
      <button className="CV" onClick={() => {downloadCV("Content Coming Soon.pdf")}}>Download</button>
    </div>
  );
};

export default CV;
