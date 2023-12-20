import React, { useState, useEffect } from "react";
import Book from "./Book";
import Papa from "papaparse";

// Custom hook for fetching book data
const useBookData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/read_with_thumbnail_urls.csv") // Adjust the path if necessary
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
  const [selectedRating, setSelectedRating] = useState("All");

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  // Filter the books by rating
  const filteredBooks = books.filter((book) => {
    return selectedRating === "All" || book.rating === selectedRating;
  });

  // Sort the filtered books by rating
  const sortedBooksByRating = [...filteredBooks].sort(
    (a, b) => b.rating - a.rating
  );

  // Only show books with "read" status
  const readBooks = sortedBooksByRating.filter(
    (book) => book["read status"] === "read"
  );

  // Render the book grid
  return (
    <>
      <div>
        <label htmlFor="rating-filter">Filter by Rating: </label>
        <select
          id="rating-filter"
          onChange={handleRatingChange}
          value={selectedRating}
        >
          <option value="All">All</option>
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Stars
            </option>
          ))}
        </select>
      </div>
      <div className="book-grid">
        {readBooks.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </>
  );
};

export default BookGrid;
