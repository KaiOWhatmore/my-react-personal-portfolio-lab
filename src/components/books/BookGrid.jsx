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
      <div className="books-header">
        <h2>Books</h2>
        <p>
          I didn't really start reading when at 23 I returned from a three year
          shoestring backpacking whirlwind and picked up a copy of On The Road.
          Ever since then I've had an unhealthy addiction to reading. My
          intersts are spread wide and far. Upon writing this I've descended
          down the rabbit hole of macro-economics and finance.
        </p>
        <p>
          I once heard a recruiter say reading isn't worth mentioning on a CV or
          to a potential employer. Since I've dedicated a whole page to what I
          read, I guess I've taken his advice to heart.
        </p>
        <p>
          Jokes aside, I spend a stupid amount of my spare time reading and it's
          where I develop my interests which influence my career, my interests
          and my life decisions, so if by a miracle you're still reading this, I
          hope you see a book you like and think we think alike and could work
          together.
        </p>
      </div>

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
