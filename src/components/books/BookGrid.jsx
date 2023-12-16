// components/BookGrid.js
import React from 'react';
import Book from './Book';
import booksDummyData from './booksDummyData';

const BookGrid = () => (
  <div className="book-grid">
    {booksDummyData.map((book, index) => (
      <Book key={index} {...book} />
    ))}
  </div>
);

export default BookGrid;
