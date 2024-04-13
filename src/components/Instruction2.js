import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TopBox from './TopBox';
import SkyBlueBox from './SkyBlueBox';
import MainArea from './MainArea';
import Typography from '@mui/material/Typography';
import BottomNavigation2 from './BottomNavigation2';


const Instruction2 = () => {
  return (
    <Box>
      <TopBox />
      <Stack direction="row" spacing={2}>
  <Box sx = {{width : '75%'}}>
    <SkyBlueBox data = "Other Important Instructions"/>
    <MainArea />
    <BottomNavigation2 />
  </Box>
  <Box sx = {{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBAajPWP4iR49fzZKj0yYDEtTmkxmf84eWsU9wTgSYA&s' alt = ''   />
    <Typography>John Smith</Typography>
  </Box>
</Stack>
    </Box>
  )
}

export default Instruction2;
