import { Box, Button } from "@mui/material";
import React from "react";

const SmallButtons = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          margin: "2px auto",
          color: "black",
          border: "1px solid black",
          backgroundColor: "#d3d3d3",
          width: "10px",
        }}
        variant="outlined"
        onClick = {props?.onClick}
      >
        {props?.data}
      </Button>
    </Box>
  );
};

export default SmallButtons;
