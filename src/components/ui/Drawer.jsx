import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MyDrawerIconContainer, MySwipeableDrawer } from "./Header.elements";
import MyDrawerList from "./MyDrawerList";

function MyDrawer({ value, setValue }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <MySwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <MyDrawerList
          setOpenDrawer={setOpenDrawer}
          value={value}
          setValue={setValue}
        />
      </MySwipeableDrawer>
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
