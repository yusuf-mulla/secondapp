import { Button, TextField } from '@mui/material';
import React from 'react'
import SecondComp from './SecondComp';

const FirstComp=()=>{
    return(
        <div> it is First Component <br />
            <TextField label='First Component' type="text" className='inpt' ></TextField> <span></span>
            <Button variant="contained" color="success"> First </Button>
            <SecondComp/>
        </div>
    )

}

export default FirstComp;