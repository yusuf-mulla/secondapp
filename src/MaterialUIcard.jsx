import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import { Data } from "./Data";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CheckBox, FavoriteBorder, Label } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import IconFab from "./IconFab";

export const MaterialUIcard = () => {
  return (
    <div>
      <div className="h1">
        <img src="./myntra-com.jpg" alt="" width={300} height={80} />
        <div className="btn">
          <Button size="small">
            <b> Login</b>
          </Button>{" "}
          <span> </span>
          <Button size="small">
            <b> SignUp</b>
          </Button>
        </div>
      </div>
      <br />
      <Grid container spacing={5}>
        {Data.map((item) => {
          return (
            <Grid item xs={3}>
              <Card className="box">
                <CardContent style={{ backgroundColor: "white" }}>
                  <Checkbox
                    className="ckbx"
                    {...Label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <IconFab />
                  <img src={item.image} alt="" height={180} width={140} />
                  <hr />
                  <h4>{item.title}</h4>
                  <h3>{item.price}</h3>

                  <Button variant="contained" color="success" className="btn1">
                    Buy Now
                  </Button>
                  <Stack direction="raw" spacing={1} className="crt">
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
