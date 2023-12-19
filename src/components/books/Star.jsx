import React from "react";

const Star = ({ filled }) => {
  const className = filled ? "fas fa-star" : "far fa-star"; // fas for filled, far for empty
  return <i className={className}></i>;
};

export default Star;
