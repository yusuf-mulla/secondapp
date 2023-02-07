import { Card, CardContent, colors, Grid } from "@mui/material";
import React from 'react'

export const MaterialCardThird = () => {
      const arr = [
      { image_url: "./mobile1.jpg", name: "iPhone 13pro" },
      { image_url: "./mobile3.jpg", name: "iPhone13" },
      { image_url: "./mobile4.jpg", name: "Realme narzo 50" },
      { image_url: "./mobile5.jpg", name: "Realme narzo" },
      { image_url: "./mobile6.jpg", name: "One plus" },
      { image_url: "./mobile7.jpg", name: "One plus nord" },
      { image_url: "./mobile8.jpg", name: "One plus z" },
      { image_url: "./mobile9.jpg", name: "Galaxy S22 ultra" },
      { image_url: "./mobile10.jpg", name: "Galaxy S22" },
      { image_url: "./mobile11.jpg", name: "Samsung M53" },
      { image_url: "./mobile12.jpg", name: "Galaxy Z flip" },
      { image_url: "./mobile13.jpg", name: "Galaxy note" },
    
    ];
  return (
    <div>
  <Grid container spacing={1}>
        {arr.map((item) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent style={{ backgroundColor: "black" }}>
                  <img src={item.image_url} alt="" widt={100} height={300} />
                  <h1 style={{color:"white"}}>{item.name}</h1>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </div>
  )
}
