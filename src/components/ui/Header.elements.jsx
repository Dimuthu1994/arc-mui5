import { Tab, Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

//All variations

export const MyLogo = styled("img")(({ theme }) => ({
  height: "56px",
  [theme.breakpoints.up("sm")]: {
    height: "64px",
  },
}));

export const MyTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  color: "white",
  minWidth: 10,
  marginLeft: "25px",
}));

export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimateButton,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50px",
  marginLeft: "25px",
  marginRight: "25px",
  whiteSpace: "nowrap",
}));

export const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px",
  },
}));

export const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.tab,
  opacity: 0.7,

  "&:hover": {
    opacity: 1,
  },

  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
