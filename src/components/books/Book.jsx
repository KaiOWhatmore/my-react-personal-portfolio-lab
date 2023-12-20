import React from "react";
import "./Book.css";
import Rating from "./Rating";

// Book component

const Book = ({ title, author, googleid, thumbnail_url, rating }) => (
  <div className="book">
    <img src={thumbnail_url} alt={thumbnail_url} />
    <h3>{title}</h3>
    <p>{author}</p>
    <p>googleid: {googleid}</p>
    <p>{<Rating rating={rating} />}</p>
  </div>
);

export default Book;
