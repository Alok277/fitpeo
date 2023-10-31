import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  return (
    <Box className="flex  justify-between">
      <Typography>Hello Shahrukh 👋🏼,</Typography>

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 200 }}
      >
         <IconButton type="button" sx={{ p: "1px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search" }}
        />
       
      </Paper>
    </Box>
  );
};

export default TopBar;
