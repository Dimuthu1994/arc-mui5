import React, { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import ToolbarItems from "./ToolbarItems";
import { ElevationScroll } from "./ElevationScroll";
import { useMediaQuery } from "@mui/material";
import logo from "../../assets/logo.svg";
import { MyLogo } from "./Header.elements";
import { Link } from "react-router-dom";
import MyDrawer from "./Drawer";

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  //tabs
  const handleChange = (e, value) => {
    setValue(value);
  };
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <ElevationScroll>
      <AppBar position="sticky" sx={(theme) => ({ ...theme.appbar })}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            sx={{ padding: 0 }}
            disableRipple
            onClick={() => setValue(0)}
          >
            <MyLogo alt="company logo" src={logo} />
          </Button>
          {matches ? (
            <MyDrawer value={value} setValue={setValue} />
          ) : (
            <ToolbarItems
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              onChange={handleChange}
            />
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
