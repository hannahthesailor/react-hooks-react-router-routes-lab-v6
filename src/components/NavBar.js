import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="navbar" role="navigation">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </div>
);

export default NavBar;