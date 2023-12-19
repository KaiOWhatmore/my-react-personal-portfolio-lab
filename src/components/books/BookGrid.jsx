// components/BookGrid.js
import React from "react";
import Book from "./Book";
import booksDummyData from "./booksDummyData";
import Papa from "papaparse";
import Book from "./Book";

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

  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default BookGrid;
