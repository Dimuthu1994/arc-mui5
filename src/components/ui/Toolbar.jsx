import { Button, Tabs, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EstimateButton,
  MyLogo,
  MyMenu,
  MyTab,
  MyMenuItem,
} from "./Header.elements";
import logo from "../../assets/logo.svg";

function ToolbarHeader({ value, setValue, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //menu item select
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setSelectedIndex(i);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contacts" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customSoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  return (
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
      <Tabs
        sx={(theme) => ({ ...theme.tabContainer })}
        value={value}
        onChange={onChange}
        textColor="inherit"
      >
        <MyTab component={Link} to="/" label="Home" />
        <MyTab
          component={Link}
          to="/services"
          label="Services"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(e) => handleClick(e)}
        />
        <MyTab component={Link} to="/revolution" label="The Revolution" />
        <MyTab component={Link} to="/about" label="About Us" />
        <MyTab component={Link} to="/contacts" label="Contact Us" />
      </Tabs>
      <EstimateButton variant="contained">Free Estimate</EstimateButton>
      <MyMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
      >
        {menuOptions.map((option, i) => {
          return (
            <MyMenuItem
              key={`${option}${i}`}
              onClick={(e) => {
                handleClose();
                setValue(1);
                handleMenuItemClick(e, i);
              }}
              component={Link}
              to={option.link}
              selected={i === selectedIndex && value === 1}
            >
              {option.name}
            </MyMenuItem>
          );
        })}
      </MyMenu>
    </Toolbar>
  );
}

export default ToolbarHeader;
