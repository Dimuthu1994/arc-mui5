import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { MyDrawerIconContainer } from "./Header.elements";
import MyList from "./MyList";

function MyDrawer(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const menuOption = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customSoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];
  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <MyList setOpenDrawer={setOpenDrawer} />
      </SwipeableDrawer>
      <MyDrawerIconContainer
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </MyDrawerIconContainer>
    </React.Fragment>
  );
}

export default MyDrawer;
