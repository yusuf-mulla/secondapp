import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

export const ApiPagination = () => {
  const [data, setData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  console.log("rowsPerPage", page);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  // function for pagination //
  const handleChange = (event, value) => {
    setRowsPerPage(10 * value);
    setPage(10 * value - 10);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.slice(page,rowsPerPage).map((item) => (
          <li>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Pagination
            count={data.length/10}
            color="primary"
            onChange={handleChange}
          />
        </li>
      </ul>
    </div>
  );
};
