import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function NavLinks(props) {
  return (
    <li className="link-li">
      <NavLink
        to={props.to}
        end
        className="link"
        onClick={props.onClick}
      >
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavLinks