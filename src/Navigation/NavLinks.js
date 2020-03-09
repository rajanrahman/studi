import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import "./NavLinks.css";

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/dashboard">Chat</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/buddies">Find Buddies</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Log In</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li style={{ paddingRight: "1rem" }}>
          <button onClick={auth.logout}>Log Out</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
