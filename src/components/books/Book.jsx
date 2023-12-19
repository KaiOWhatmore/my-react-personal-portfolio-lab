import React from "react";
import "./Book.css";
import Rating from "./Rating";

// Book component

const Book = ({
  title,
  author,
  googleid,
  imageUrl,
  "end date": endDate,
  rating,
}) => (
  <div className="book">
    <img src={imageUrl} alt={imageUrl} />
    <h3>{title}</h3>
    <p>{author}</p>
    <p>googleid: {googleid}</p>
    <p>{<Rating rating={rating} />}</p>
  </div>
);

export default Book;
