import React, { useState, useEffect } from "react";
import {Grid,Card,CardContent,Button,TextField,Badge,} from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Home = () => {
  const [data, setData] = useState([]);

  const [addtoCart, setAddtoCart] = useState([]);
  const [copyData, setCopyData] = useState([]);

  async function addData() {
    const getData = await axios.get("https://fakestoreapi.com/products");
    setData(getData.data);
    setCopyData(getData.data);
  }
  const handleAddtoCart = (item) => {
    const duplicateCart = addtoCart.some((elem) => elem.id == item.id);
    if (!duplicateCart) {
      setAddtoCart([...addtoCart, item]);
    }
  };

  const handleFilter = (value) => {
    const searchData = copyData.filter((item) =>
      item.title.toUpperCase().includes(value.toUpperCase())
    );
    setData(searchData);
  };

  const handleCatageryMen = (userCatagory) => {
    if ("All" == userCatagory) {
      setData(copyData);
    } else {
      const searchCatagery = copyData.filter((item) =>
        item.category.includes(userCatagory)
      );
      setData(searchCatagery);
    }
  };
 
  useEffect(() => {
    addData();
  }, []);

  return (
    <div>

      <Grid container spacing={3} style={{ marginTop: 0 }}>
        <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("men's clothing")}
          >
            Mens
          </Button>
        </Grid>
        <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("women's clothing")}
          >
            Womens
          </Button>
        </Grid>
        <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("electronics")}
          >
            Electric
          </Button>
        </Grid>
        <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("jewelery")}
          >
            Jewllory
          </Button>
        </Grid>
        <Grid item xs={1} className="Button-Container">
          <Button variant="contained" onClick={() => handleCatageryMen("All")}>
            All
          </Button>
        </Grid>
        <Grid item xs={2} className="Button-Container">
          <TextField
            label="Search"
            fullWidth
            onChange={(e) => handleFilter(e.target.value)}
          />
        </Grid>

        <Grid item xs={1} className="Button-Container">
          <Badge color="secondary" badgeContent={addtoCart.length} showZero>
            <ShoppingCartIcon
              style={{ color: "#1976d2", fontSize: 40, cursor: "pointer" }}
            />
          </Badge>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Card sx={{ height: 400 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 50 }}
                  />
                  <h3>
                    Title:{item.title.substring(0, 30)}{" "}
                    {item.title.length > 30 && "..."}
                  </h3>
                  <h4>Prise: $ {item.price}</h4>
                  <Button variant="contained" color="error">
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "relative", left: 70 }}
                    onClick={() => handleAddtoCart(item)}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
