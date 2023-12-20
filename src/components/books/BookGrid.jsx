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
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  // Filter the books by selected ratings
  const filteredBooks = books.filter(
    (book) =>
      selectedRatings.length === 0 || selectedRatings.includes(book.rating)
  );

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
        <label>Filter by Rating:</label>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rating-filter">
            <input
              type="checkbox"
              id={`star-${i + 1}`}
              checked={selectedRatings.includes(i + 1)}
              onChange={() => handleRatingChange(i + 1)}
            />
            <label htmlFor={`star-${i + 1}`}>{i + 1} Stars</label>
          </div>
        ))}
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
