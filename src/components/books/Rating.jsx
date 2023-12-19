import React from "react";
import Star from "./Star";

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default Rating;
