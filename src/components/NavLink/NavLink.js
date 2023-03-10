import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  return (
    <li>
      <NavLink
        to={props.to}
        end
      >
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavLinks