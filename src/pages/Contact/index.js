import React from "react";
import Socials from "../../components/Socials"
import CV from "../../components/CV"
import "./style.css"

function Contact() {
  return (
    <div className="contact">
      <h1>Get in touch with me</h1>
      <div className="contactLinks">
        <Socials className="phone" href="tel:+447414 448447" text="Phone" />
        <Socials className="email" href="mailto:dmlswebdev@gmail.com" text="Email" />
        <Socials className="github" href="https://github.com/dalvat" text="GitHub" />
        <Socials className="linkedin" href="https://www.linkedin.com/in/david-salvat/" text="LinkedIn" />
      </div>
        <CV />
    </div>
  )
}

export default Contact;