import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Tab, Tabs } from "@mui/material";

import { MyLogo, MyTab } from "./Header.elements";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <MyLogo alt="company logo" src={logo} />
          <Tabs sx={(theme) => ({ ...theme.tabContainer })}>
            <MyTab label="Home" />
            <MyTab label="Services" />
            <MyTab label="The Revolution" />
            <MyTab label="About Us" />
            <MyTab label="Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
