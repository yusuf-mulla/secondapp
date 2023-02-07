import { Button, TextField } from "@mui/material";
import React from "react";

 const ThirdComp=()=>{
    return(
        <div> it is a third component <br />
            <TextField label='Third Component' type="text" className='inpt' ></TextField> <span></span>
            <Button variant="contained" color="success"> Third </Button>
        </div>
    )
}
export default ThirdComp;