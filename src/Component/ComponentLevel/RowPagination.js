import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";


export const RowPagination = () => {
  const [data, setData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(2)
  const [page, setPage] =useState(0);
  
  const arrayLength = rowsPerPage * page + rowsPerPage;
  const arrayIndex = arrayLength - rowsPerPage;
  
  
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

 // function for pagination //
 const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};


  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.slice(arrayIndex,arrayLength).map((item) => (
          <li>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <ul>
          <li>
            <TablePagination
                rowsPerPageOptions={[2, 4, 6, 8]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
          </li>
      </ul>
    </div>
  );
};
