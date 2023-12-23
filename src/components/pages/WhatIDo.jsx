import React from "react";
import "./WhatIDo.css"; // Make sure to create this CSS file and import it here
import { Link } from "react-router-dom";

function WhatIDo() {
  return (
    <div className="what-i-do-container">
      <h1 className="header">What I Do</h1>
      <p className="subtitle">
        SELF TAUGHT DEVELOPER WHO IS TOO CURIOUS FOR HIS OWN GOOD
      </p>
      <div className="icons">
        <i className="fab fa-java custom-java fa-2x"></i>
        <i className="fab fa-python custom-python fa-2x"></i>
        <i className="fas fa-database custom-database fa-2x"></i>
        <i className="fas fa-leaf custom-spring fa-2x"></i>
        <i className="fas fa-feather custom-maven fa-2x"></i>
        <i className="fab fa-docker custom-docker fa-2x"></i>
        <i className="fab fa-aws custom-aws fa-2x"></i>
        <i className="fab fa-jenkins custom-jenkins fa-2x"></i>
        {/* <i className="fas fa-terminal custom-terminal fa-2x"></i> */}
        <span className="fas fa-stack custom-terminal fa-1x">
          <i className="fas fa-solid fa-square fa-stack-2x"></i>
          <i className="fas fa-solid fa-terminal fa-stack-1x fa-inverse"></i>
        </span>
      </div>
      <ul className="professional-spiel">
        <li>
          Working in enterprise environments working with complex backend
          systems
        </li>
        <li>
          Putting my nose to the grindwheel on REST APIs, Back Office backend
          engineering, DevOps and Developer Tools
        </li>
        <li>
          Self teaching React and FrontEnd development for pet projects and
          professional aspirations
        </li>
      </ul>
      <hr className="line-separator" />
      <div>
        <ul className="other-interests">
          <p>
            Phew. Now that the professional spiel is over, my other interests
            include
          </p>
          <li>
            {" "}
            Reading. And I mean A LOT.{" "}
            <Link to="/books">Check out my DIY made virtual library</Link>
          </li>
          <li>
            {" "}
            Photography and film go to my youtube channel here [insert link
            here]
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhatIDo;
