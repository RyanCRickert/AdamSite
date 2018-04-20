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
    Hi there.  I am an up and coming web developer using ReactJS with a bit of knowledge of NodeJS.  
    I created this mockup to show my skill of taking an existing idea and being able to replicate it.  
    I did this using React, PhotoSwipeReact and Sass.
  </p>
  <p>
  I enjoy games and my family.
  </p>
  </div>
  <div className="inspiration-link">
    Feeling inspired? <Link to="/inspiration">(I was too)</Link>
  </div>
</div>
)