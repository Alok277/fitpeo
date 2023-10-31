import { Avatar, Box, Card } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import ArticleIcon from "@mui/icons-material/Article";
import React from "react";

const Cards = () => {
  const cardData = [
    {
      title: "Earning",
      earn: " $198k",
      growth: `37.8%`,
      month: "this month",
      backgroundColor: "#CBF0D4",
      icons: <CurrencyExchangeIcon />,
    },
    {
      title: "Orders",
      earn: "$2.4k",
      growth: "2%",
      month: "this month",
      backgroundColor: "#E9C9F7",
      icons: <ArticleIcon />,
    },
    {
      title: "Balance",
      earn: "$2.4k",
      growth: "2%",
      month: "this month",
      backgroundColor: "#A3EBF9",
      icons: <AccountBalanceWalletIcon />,
    },
    {
      title: "Total Sales",
      earn: "$89k",
      growth: "11%",
      month: "this week",
      backgroundColor: "#FCCEDA",
      icons: <ShoppingBagOutlinedIcon />,
    },
  ];

  return (
    <Box  sx={{ display: "flex", justifyContent: "space-between" }}>
      {cardData.map((list) => (
        <Card
          className="flex text-justify !justify-evenly pt-3 flex-1 "
          sx={{ backgroundColor: "white", width: "150px", height: "100px" }}
        >
          <Avatar
            sx={{
              bgcolor: `${list.backgroundColor}`,
              width: 70,
              height: 70,
            }}
          >
            {list.icons};
          </Avatar>

          <Box sx={{ width: 70, pt: "8px" }}>
            <ul>
              <li className="font-thin text-[8px] ">{list.title}</li>
              <li className="font-bold text-xl">{list.earn}</li>
              <li
                className="font-semibold text-xs flex !text-[8px] "
                style={{ display: "-webkit-box" }}
              >
                <p>
                  {list.growth === "2%" ? (
                    <span style={{ color: "red" }}>&#8595;{list.growth}</span>
                  ) : (
                    <span style={{ color: "green" }}>&#8593;{list.growth}</span>
                  )}
                </p>
                <p>{list.month} </p>
              </li>
            </ul>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
