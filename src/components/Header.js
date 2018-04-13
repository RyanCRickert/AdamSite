import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export default () => (
  <header>
    <div>
      <NavLink className="button-small__custom" to="/ui" activeClassName="button-active">UI</NavLink>
      <NavLink className="button-small__custom" to="/2d" activeClassName="button-active">2D</NavLink>
      <NavLink className="button-small__custom" to="/3d" activeClassName="button-active">3D</NavLink>
      <NavLink className="button-small__custom" to="/me" activeClassName="button-active">ME</NavLink>
    </div>
  </header>
);