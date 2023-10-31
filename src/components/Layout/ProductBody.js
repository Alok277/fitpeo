import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";

const ProductBody = () => {
  const productData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1698431126204-45d98a063012?auto=format&fit=crop&q=80&w=2853&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Abstract 3D",
      desc: " Lorem Ipsum is printing and typesetting industry.",
      stocks: "32 in stock",
      price: " $ 45.99",
      sales: 20,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1698002253060-b82a6336fd85?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarphens Illustration",
      desc: " Lorem Ipsum is  typesetting industry.",
      stocks: "32 in stock",
      price: " $ 45.99",
      sales: 20,
    },
  ];
  return (
    <>
      {productData.map((list) => (
        <Box sx={{ display: "flex", justifyContent: "space-between",mt:'5px' }}>
          <Box
            sx={{
              width: "60px",
              height: "40px",
              ml: "15px",
            }}
          >
            <img
              src={list.imgSrc}
              alt="product_image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>          
          <Box
            sx={{
              ml: "15px",             
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "12px", height: "20px", overflow: "hidden" }}
            >
              {list.name}
            </Typography>
            <Typography
              sx={{ fontSize: "8px", height: "30px", overflow: "hidden" }}
            >
              {list.desc}
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
            <Typography sx={{ fontSize: "10px", color: "#6B6B6B" }}>
              {list.stocks}
            </Typography>
            <Typography sx={{ fontSize: "13px", mr: "30px" }}>
              <b> {list.price}</b>
            </Typography>
            <Typography sx={{ fontSize: "12px", mr: "30px" }}>
              {list.sales}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProductBody;
