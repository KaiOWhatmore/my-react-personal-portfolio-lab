import React from 'react';
import './Badge.css'; // Make sure to write some CSS to style your badge

const Badge = ({ text }) => {
  return <div className="badge">{text}</div>;
};

export default Badge;
