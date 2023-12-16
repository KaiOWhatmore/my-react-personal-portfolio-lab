import React from 'react';
import './Book.css';

const Book = ({ title, author, dateRead, imageUrl }) => (
  <div className="book">
    <img src={imageUrl} alt={imageUrl} />
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{dateRead}</p>
  </div>
);

export default Book;

