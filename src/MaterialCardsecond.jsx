import { Card, CardContent, colors, Grid } from "@mui/material";
import React from 'react'

export const MaterialCardsecond = () => {
     const arr= new Array (14)
  arr.fill(0)
  return (
    <div>
   <Grid container spacing={1}>
        {arr.map((item,index) => {
          return (
            <Grid item xs={3}>
              <Card>
                <CardContent style={{ backgroundColor: "black" }}>
                  <img src={`./mobile${index}.jpg`} alt="" widt={100} height={300} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </div>
  )
}
