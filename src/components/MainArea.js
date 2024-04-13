import React from 'react';
import Box from '@mui/material/Box';

const MainArea = () => {
  return (
    <Box sx={{ textAlign: 'center', height: '550px' }}>
      <div style={{ overflowY: 'scroll', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{  paddingLeft: '20px' }}>
          <Box>
            Please read the instructions carefully
          </Box>

          <Box style={{height : '200px'}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Box>
        </div>
      </div>
    </Box>
  )
}

export default MainArea;
