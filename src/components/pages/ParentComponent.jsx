// ParentComponent.js
import React from "react";
import Badge from "./Badge"; // Path to your Badge component

const ParentComponent = ({ technologies }) => {
  return (
    <div className="tech-container">
      {technologies.map((tech, index) => (
        <Badge key={index} text={tech} />
      ))}
    </div>
  );
};

export default ParentComponent;
