import React from "react";
import { Link } from "react-router-dom";
import { MyMenu, MyMenuItem } from "./Header.elements";
import { menuOptions } from "./Arrays";
function ServicesMenu({
  anchorEl,
  open,
  onClose,
  setValue,
  onMenuItemClick,
  selectedIndex,
  value,
}) {
  return (
    <MyMenu
      id="simple-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        onMouseLeave: onClose,
      }}
      elevation={0}
    >
      {menuOptions.map((option, i) => {
        return (
          <MyMenuItem
            key={`${option}${i}`}
            onClick={(e) => {
              onClose();
              setValue(1);
              onMenuItemClick(e, i);
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
  );
}

export default ServicesMenu;
