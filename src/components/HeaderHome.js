import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default () => (
  <header>
    <div>
      <Link className="button__custom" to="/ui">UI</Link>
      <Link className="button__custom" to="/2d">2D</Link>
      <Link className="button__custom" to="/3d">3D</Link>
      <Link className="button__custom" to="/me">ME</Link>
    </div>
  </header>
);