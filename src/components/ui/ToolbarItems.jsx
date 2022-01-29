import { Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EstimateButton, MyTab } from "./Header.elements";
import useRefreshTabs from "./Hooks/useRefreshTabs";

import ServicesMenu from "./ServicesMenu";

function ToolbarItems({
  value,
  setValue,
  onChange,
  selectedIndex,
  setSelectedIndex,
}) {
  //   Menu
  const [anchorEl, setAnchorEl] = useState(null);

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

  useRefreshTabs(value, setValue, setSelectedIndex);

  const tabRoutes = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },
    { name: "Contacts Us", link: "/contacts" },
  ];

  return (
    <>
      <Tabs
        sx={(theme) => ({ ...theme.tabContainer })}
        value={value}
        onChange={onChange}
        textColor="inherit"
      >
        {tabRoutes.map((tab, i) => (
          <MyTab
            key={`${tab}${i}`}
            component={Link}
            to={tab.link}
            label={tab.name}
            aria-owns={tab.ariaOwns}
            aria-haspopup={tab.ariaPopup}
            onMouseOver={tab.mouseOver}
          />
        ))}
      </Tabs>
      <EstimateButton
        variant="contained"
        component={Link}
        to="/estimate"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </EstimateButton>
      {/* Menu */}
      <ServicesMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        setValue={setValue}
        onMenuItemClick={handleMenuItemClick}
        selectedIndex={selectedIndex}
        value={value}
      />
    </>
  );
}

export default ToolbarItems;
