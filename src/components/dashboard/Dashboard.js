import React from "react";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="parent">
        <HexagonOutlinedIcon />
        <div className="child"><HexagonOutlinedIcon  sx={{fontSize:'10px',mt:'1.4px'}}/></div>
        </div>
        <h2 className="mr-5">Dashboard</h2>
      </div>

    
    </div>
  );
};

export default Dashboard;
