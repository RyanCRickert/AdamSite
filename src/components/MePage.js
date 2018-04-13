import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default () => (
<div className="content-container">
  <div className="header">
    <Header />
  </div>
  <div className="me-page">
  <p>
    Hi there.  I am an up and coming web developer using Node.JS and ReactJS.  I have no idea why I created this mockup but I did it with React, PhotoSwipeReact and Sass.
  </p>
  <p>
  I enjoy games and my family.
  </p>
  </div>
  <div className="inspiration-link">
    Feeling inspired? <Link to="/inspiration">(Not me, I ripped this website off)</Link>
  </div>
</div>
)