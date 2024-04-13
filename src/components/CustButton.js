import { Box, Button } from '@mui/material';
import React from 'react';

const CustButton = (props) => {
  const { data, length,onClick} = props;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button {...props} sx={{ margin: '2px auto', color: 'black', border: '1px solid black', backgroundColor: '#708090', width: `${length}px` }} variant="outlined">{props?.data}</Button>
    </Box>
  );
};

export default CustButton;
