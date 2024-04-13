import React from 'react';
import Box from '@mui/material/Box';

const SkyBlueBox = ({data}) => {
  return (
    <Box>
      <Box sx = {{backgroundColor : '#bce8f5', height : '35px'}}>{data}</Box>
    </Box>
  )
}

export default SkyBlueBox;
