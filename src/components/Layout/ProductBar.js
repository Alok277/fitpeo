import React from "react";
import { Divider, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
const ProductBar = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ ml: "20px", mt: "10px" }}>
          <Typography>
            <b>Product Sell</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
            mt: "10px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#F8F8FB",
              width: "130px",
              height: "20px",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ fontSize: "15px" }} />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "15px" }}
              placeholder="search"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#F8F8FB",
              width: "130px",
              height: "20px",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "15px" }}
              placeholder="Last 30 days"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <ArrowDropDownIcon sx={{ fontSize: "15px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ ml: "20px", mt: "10px" }}>
          <Typography sx={{ fontSize: "10px", color: "#D4D2D2" }}>
            <b>Product Name</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
            mt: "10px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "#D4D2D2" }}>
            <b>Stock</b>
          </Typography>

          <Typography sx={{ fontSize: "10px", color: "#D4D2D2" }}>
            <b>Price</b>
          </Typography>
          <Typography sx={{ fontSize: "10px", color: "#D4D2D2" }}>
            <b>Total Sales</b>
          </Typography>
        </Box>
      </Box>
      <Divider/>
    </Box>
  );
};

export default ProductBar;
