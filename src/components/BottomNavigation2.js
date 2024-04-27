import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

const BottomNavigation2 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Adjusted flex direction
        alignItems: 'center',
        border: '1px solid #a6a6a6',
        height: 'auto', // Changed height to auto
        justifyContent: 'flex-end'
      }}
    >
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Link to = '/'>
        <Button
          sx={{ margin: '16px', border: '1px solid #a6a6a6', borderRadius: '0px', color: 'black' }}
        >
          ⬅️ Previous
        </Button></Link>
        <Button variant="contained" sx={{ margin: '16px' }}>I am ready to begin</Button>
        <span />
      </Box>
    </Box>
  );
}

export default BottomNavigation2;
