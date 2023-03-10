import React from "react";
import NavLinks from "../../components/NavLink/NavLink"
import TypedText from "../../components/TypedText/TypedText"

import "./Home.css";


function Home() {
  return (
    <div className="heroImage">
        <div className="heroText">
          <p id="name">David Salvat</p>
          <TypedText />
          <NavLinks to='/about' name='About' />
        </div>
    </div>
  )
}

export default Home;