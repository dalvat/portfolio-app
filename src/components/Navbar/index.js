import React, { useState } from "react";
import NavLinks from "../NavLink";
import TypedText from "../TypedText"
import "./style.css";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState('≡');
    
  const toggleMenu = () => {
    setOpen(!open)
    
    if (!open) {
      setSymbol("x")
    } else {
      setSymbol("≡")
    }
    
  };

  return (
    <nav className="navbar">
      <div className="navbarMain">
        <div className="navbarBrand">
          <h1>David Salvat</h1>
          <TypedText />
        </div>
        <button className="toggleBtn" onClick={toggleMenu}>{symbol}</button>
      </div>
        {open && (
          <div className="toggleMenu">
            <ul className="navLinks">
              <NavLinks onClick={toggleMenu} to='/' name='Home' />
              <NavLinks onClick={toggleMenu} to='/about' name='About' />
              <NavLinks onClick={toggleMenu} to='/contact' name='Contact' />
              <NavLinks onClick={toggleMenu} to='/portfolio' name='Portfolio' />
              <NavLinks onClick={toggleMenu} to='/services' name='Services' />
            </ul>
          </div>
          )}
    </nav>
  )
};

export default Navbar;
