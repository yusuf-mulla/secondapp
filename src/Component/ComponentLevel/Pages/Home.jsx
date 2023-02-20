import React, { useState, useEffect } from "react";
import {Grid,Card,CardContent,Button,TextField,Badge,} from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { activateLoader, addQuantity, deactivateLoader, handleDecremenyQty, handleIncrementQty } from "./Utility";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const ProductReducer = select.ProductReducer;

  const [data, setData] = useState(select.ProductReducer.product);
  const [copyData, setCopyData] = useState(select.ProductReducer.product);
  const [category, setCategory] = useState(select.ProductReducer.category);
  const [addtoCart, setAddtoCart] = useState(select.ProductReducer.cart);

  const [search, setsearch] = useState("");

  // console.log("select", select);

  async function addData() {
    if (select.ProductReducer.product.length > 0) {
      setData(select.ProductReducer.product);
      setCopyData(select.ProductReducer.product);
    } else {
      activateLoader(dispatch)
      const getData = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: "ADD_PRODUCT",
        payload: addQuantity(getData.data),
      });
      console.log(select);
      deactivateLoader(dispatch)
      setData(addQuantity(getData.data));
      setCopyData(addQuantity(getData.data));
    }
    if (select.ProductReducer.product.length > 0) {
      setCategory(select.ProductReducer.category);
    } else {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      // console.log(res);
      
      dispatch({
        type: "ADD_CATEGORY",
        payload: [...res.data, "All"],
      });
      setCategory([...res.data, "All"]);
    }
  }
  // console.log("catogery", ProductReducer);

  const handleAddtoCart = (item) => {
    const duplicateCart = addtoCart.some((elem) => elem.id == item.id);
    if (!duplicateCart) {
      setAddtoCart([...addtoCart, item]);
      dispatch({
        type: "ADD_TO_CART",
        payload: [...addtoCart, item],
      });
    }
  };

  // const handleFilter = (value) => {
  //   const searchData = copyData.filter((item) =>
  //     item.title.toUpperCase().includes(value.toUpperCase())
  //   );
  //   setData(searchData);
  // };

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
  const handleNavigate = (item) => {
    navigate("./detail", { state: item });
    // console.log(item);
  };

  const handleIncrement = (id) => {
    const res = handleIncrementQty(copyData, id);
    setData(res);
    setCopyData(res);
    dispatch({
      type: "ADD_PRODUCT",
      payload: res,
    });
  };
  const handleDecrement = (id) => {
    const res = handleDecremenyQty(copyData, id);
    setData(res);
    setCopyData(res);
  };

  useEffect(() => {
    addData();
  }, []);

  useEffect(() => {
    const searchData = copyData.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    setData(searchData);
    // console.log(search);
  }, [search]);

  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: 0 }}>
        {category.map((item, index) => {
          return (
            <Grid item xs={item == "All" ? 1 : 2} key={index}>
              <Button
                variant="contained"
                className="Button-Container"
                onClick={() => handleCatageryMen(item)}
              >
                {item}
              </Button>
            </Grid>
          );
        })}

        {/* <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("women's clothing")}
          >
            Womens
          </Button>
        </Grid> */}
        {/* <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("electronics")}
          >
            Electric
          </Button>
        </Grid> */}
        {/* <Grid item xs={2} className="Button-Container">
          <Button
            variant="contained"
            onClick={() => handleCatageryMen("jewelery")}
          >
            Jewllory
          </Button>
        </Grid> */}
        {/* <Grid item xs={1} className="Button-Container">
          <Button variant="contained" onClick={() => handleCatageryMen("All")}>
            All
          </Button>
        </Grid> */}
        <Grid item xs={2} className="Button-Container">
          <TextField
            label="Search"
            fullWidth
            onChange={(e) => setsearch(e.target.value)}
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
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ height: 450 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 50 }}
                  />
                  <h3>
                    Title:{item.title.substring(0, 22)}{" "}
                    {item.title.length > 22 && "..."}
                  </h3>
                  <h4>Prise: $ {item.price}</h4>
                  <h2>
                    <span>
                      <RemoveIcon
                        className="add-icone"
                        onClick={() =>
                          item.userQuantity > 0 && handleDecrement(item.id)
                        }
                      />
                    </span>
                    {item.userQuantity}
                    <span>
                      <AddIcon
                        className="add-icone"
                        onClick={() => handleIncrement(item.id)}
                      />
                    </span>
                  </h2>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleNavigate(item)}
                  >
                    {" "}
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
