import React from "react";
import NavLinks from "../NavLink/NavLink";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
        <ul>
          <NavLinks to='/' name='Home' />
          <NavLinks to='/about' name='About' />
          <NavLinks to='/contact' name='Contact' />
          <NavLinks to='/portfolio' name='Portfolio' />
          <NavLinks to='/services' name='Services' />
        </ul>
    </nav>
  )
};

export default Navbar;
