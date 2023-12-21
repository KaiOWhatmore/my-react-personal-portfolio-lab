import React, { useState, useEffect } from "react";
import Book from "./Book";
import Papa from "papaparse";
import "./BookGrid.css";

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
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  // Filter the books by selected ratings
  const filteredBooks = books.filter((book) => {
    // Convert book.rating to a number for comparison, as it's likely a string from CSV
    const bookRatingNum = Number(book.rating);
    return (
      selectedRatings.length === 0 || selectedRatings.includes(bookRatingNum)
    );
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
      <div className="filter-bar">
        <label className="filter-label">Filter by Rating:</label>
        <div className="rating-filters">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="rating-filter">
              <input
                className="rating-checkbox"
                type="checkbox"
                id={`star-${star}`}
                checked={selectedRatings.includes(star)}
                onChange={() => handleRatingChange(star)}
              />
              <label htmlFor={`star-${star}`}> {star} Stars </label>
            </div>
          ))}
        </div>
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
