import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "./Dashboard";
import { SideBarAssets } from "../../utils/SideBar";
import TopBar from "../Layout/TopBar";
import Cards from "../Layout/Cards";
import Graph from "../Layout/Graph";
import ProductList from "../Layout/ProductList";

const drawerWidth = 220;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 1,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#07072f",
            color: "#afa6a6",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Dashboard />
        <List>
          {SideBarAssets.map((text, index) => (
            <ListItem key={text} secondaryAction disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#afa6a6" }}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} />
                {">"}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        className="m-7 !mb-0"
        sx={{ flexGrow: 1, position: "cover", paddingBottom: "5px" }}
      >
        <Box>
          <TopBar />
        </Box>
        <Box marginTop={4}>
          <Cards />
        </Box>
        <Box marginTop={2}>
          <Graph />
        </Box>
        <Box marginTop={2}>
          <ProductList />
        </Box>
      </Box>
    </Box>
  );
}
