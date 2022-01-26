import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import React from "react";
import { MyListItemButton } from "./Header.elements";
import { drawerOption } from "./Arrays";

function MyDrawerList({ setOpenDrawer, value, setValue }) {
  return (
    <List disablePadding>
      {drawerOption.map((option, i) => (
        <MyListItemButton
          key={`${option}${i}`}
          component={Link}
          to={option.link}
          divider
          onClick={() => {
            setOpenDrawer(false);
            setValue(option.activeIndex);
          }}
          selected={value === option.activeIndex}
        >
          <ListItemText
            disableTypography={true}
            sx={(theme) => ({ ...theme.typography.tab })}
          >
            {option.name}
          </ListItemText>
        </MyListItemButton>
      ))}

      <MyListItemButton
        component={Link}
        to="/estimate"
        divider
        onClick={() => {
          setOpenDrawer(false);
          setValue(5);
        }}
        sx={(theme) => ({ ...theme.drawerItemEstimate })}
        estimate="true"
        selected={value === 5}
      >
        <ListItemText
          disableTypography={true}
          sx={(theme) => ({
            ...theme.typography.tab,
          })}
        >
          Free Estimate
        </ListItemText>
      </MyListItemButton>
    </List>
  );
}

export default MyDrawerList;
