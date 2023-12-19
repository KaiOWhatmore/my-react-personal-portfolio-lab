// components/BookGrid.js
import React, { useState, useEffect } from "react";
import Book from "./Book";
import Papa from "papaparse";

// Custom hook for fetching book data
const useBookData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/output-sorted-read.csv") // Adjust the path if necessary
      .then((response) => response.text())
      .then((csvString) => {
        const parsedData = Papa.parse(csvString, {
          header: true,
          skipEmptyLines: true,
        }).data;
        setData(parsedData);
      });
  }, []);

  return data;
};

const BookGrid = () => {
  const books = useBookData();

  // Sort the books by rating
  const sortedBooksByRating = [...books].sort((a, b) => b.rating - a.rating);

  const readBooks = sortedBooksByRating.filter(
    (book) => book["read status"] === "read"
  );
  // Render the book grid
  return (
    <div className="book-grid">
      {readBooks.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default BookGrid;
