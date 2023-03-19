import React from "react";
import "./style.css"
import Socials from "../../components/Socials"

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
    </div>
  )
}

export default Contact;