import { Button, TextField } from '@mui/material';
import React from 'react'
import ThirdComp from './ThirdComp'

const SecondComp=()=>{
    return(
        <div>it is a Second Component <br />
            <TextField label='Second Component' type="text" className='inpt' ></TextField> <span></span>
            <Button variant="contained" color="success"> Second </Button>
        <ThirdComp/>
        </div>
    )
}
export default SecondComp;