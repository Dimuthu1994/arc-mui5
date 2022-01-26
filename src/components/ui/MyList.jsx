import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import React from "react";

function MyList({ setOpenDrawer }) {
  return (
    <List disablePadding>
      <ListItemButton
        component={Link}
        to="/"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>Home</ListItemText>
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/services"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>Services</ListItemText>
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/revolution"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>The Revolution</ListItemText>
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/about"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>About Us</ListItemText>
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/contact"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>Contact Us</ListItemText>
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/estimate"
        divider
        onClick={() => setOpenDrawer(false)}
      >
        <ListItemText>Free Estimate</ListItemText>
      </ListItemButton>
    </List>
  );
}

export default MyList;
