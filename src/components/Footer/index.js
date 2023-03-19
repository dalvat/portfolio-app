import React from "react";
import "./style.css";

function Footer() {
  return (
  <>
    <footer className="footer">
      <div className="socials">
        <a className="phone" href="tel:+447414448447" target="_blank"></a>
        <a className="email" href="mailto:dmlswebdev@gmail.com" target="_blank"></a>
        <a className="github" href="https://github.com/dalvat" target="_blank"></a>
        <a className="linkedin" href="https://www.linkedin.com/in/david-salvat/" target="_blank"></a>
      </div>
      <p>© David Salvat 2023</p>
    </footer>
  </>
  );
};

export default Footer;
