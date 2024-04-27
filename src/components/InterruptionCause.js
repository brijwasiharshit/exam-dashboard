import { Avatar, Box, Divider, Typography } from '@mui/material';
import React from 'react';

const InterruptionCause = () => {
  return (
    <Box>
      <Avatar
        src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png"
        sx = {{margin : '20px auto', width : '80px', height : '80px'}}
      />
      <Typography variant='h6' align='center'>1) Note: System records every single interruption during the Assessment.</Typography>
      <Typography variant='h6' align='center'>2) Interruption is recorded in the system due one of the following possible reasons:</Typography>
      <Typography variant='h6' align='center'>3) You have pressed special keys from your keyboard which are not allowed during Assessment.</Typography>
      <Typography variant='h6' align='center'>4) You have tried to refresh the page.</Typography>
      <Typography variant='h6' align='center'>This window will close down and you have to re-launch the Assessment only after it is unlocked. Please be advised not to move out of console during the assessment and not to navigate to other applications during the assessment.</Typography>
      <Divider sx = {{width : '80%', margin : '20px auto'}} />
    </Box>
  );
};

export default InterruptionCause;
