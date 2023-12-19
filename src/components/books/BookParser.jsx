import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const BookParser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../../public/output-sorted-read.csv")
      .then((response) => response.text())
      .then((csvString) => {
        const parsedData = Papa.parse(csvString, {
          header: true,
          skipEmptyLines: true,
        }).data;
        setData(parsedData);
      });
  }, []);

  // Rest of your component logic...
};

export default BookParser;
