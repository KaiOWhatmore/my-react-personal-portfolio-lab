import React from 'react';
import './WhatIDo.css'; // Make sure to create this CSS file and import it here

const WhatIDo = () => {
  return (
    <div className="what-i-do-container">
      <h1>What I Do</h1>
      <p className="subtitle">SELF TAUGHT CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
      <div className="icons">
        {/* Replace 'faJava' with the correct class names for your icons */}
        <i className="faJava"></i>
        <i className="faPython"></i>
        {/* ... all your other icons */}
      </div>
      <ul>
        <li>Working in enterprise environments working with complex backend systems</li>
        <li>Putting my nose to the grindwheel on REST APIs, Back Office backend engineering, DevOps and Developer Tools</li>
        <li>Self teaching React and FrontEnd development for pet projects and professional aspirations</li>
      </ul>
    </div>
  );
};

export default WhatIDo;
