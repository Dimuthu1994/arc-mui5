import React, { useState } from "react";
import { AppBar, useScrollTrigger } from "@mui/material";
import ToolbarHeader from "./Toolbar";

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
  const [value, setValue] = useState(0);

  //tabs
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <ToolbarHeader
          value={value}
          setValue={setValue}
          onChange={handleChange}
        />
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
