import React, { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import ToolbarItems from "./Toolbar";
import { ElevationScroll } from "./ElevationScroll";
import { useMediaQuery } from "@mui/material";
import logo from "../../assets/logo.svg";
import { MyLogo } from "./Header.elements";
import { Link } from "react-router-dom";
import MyDrawer from "./Drawer";

function Header(props) {
  const [value, setValue] = useState(0);

  //tabs
  const handleChange = (e, value) => {
    setValue(value);
  };
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        sx={(theme) => ({ zIndex: theme.zIndex.modal + 1 })}
      >
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
              onChange={handleChange}
            />
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
