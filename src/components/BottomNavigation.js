import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <Box sx = {{display: 'flex' ,alignItems : 'center', border: '1px solid #a6a6a6', height: '11%' , justifyContent : 'end'}}>
       <Link to = '/instruction2'><Button  sx = {{margin : 'auto 16px', border: '1px solid #a6a6a6' , borderRadius : '0px', color : 'black' }}>Next →</Button></Link>
    </Box>
  )
}

export default BottomNavigation;
