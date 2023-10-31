import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import MonthlyEarnings from "./MonthlyEarning";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomersGraph from "./CustomersGraph";

const Graph = () => {
  const [list, setList] = useState(false);
  const [period, setPeriod] = useState("Monthly");
  const clickHandlar = () => {
    setList(!list);
  };
  const earningPeriod = (e) => {
    setPeriod(e.target.innerText);
    console.log(e);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Card
        sx={{
          backgroundColor: "white",
          width: "450px",
          height: "200px",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={() => clickHandlar()}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: "100",
            fontSize: "10px",
          }}
        >
          {period}
          <ArrowDropDownIcon sx={{ width: "20px", height: "20px" }} />
          {list && (
            <ul
              style={{
                display: "flex-inline",
                textAlign: "left",
                fontSize: "10px",
              }}
            >
              <li onClick={earningPeriod}>Monthly</li>
              <li onClick={earningPeriod}>Quarterly</li>
              <li onClick={earningPeriod}>Yearly</li>
            </ul>
          )}
        </button>
        <MonthlyEarnings />
      </Card>
      <Card sx={{ backgroundColor: "white", width: "200px", height: "200px" }}>
        <CustomersGraph />
      </Card>
    </Box>
  );
};

export default Graph;
