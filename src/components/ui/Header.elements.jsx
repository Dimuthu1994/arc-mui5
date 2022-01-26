import {
  Tab,
  Button,
  Menu,
  MenuItem,
  SwipeableDrawer,
  ListItemButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
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
  marginLeft: "20px",
}));

export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimateButton,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50px",
  marginLeft: "20px",
  marginRight: "20px",
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

export const MyDrawerIconContainer = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: "auto",
  marginRight: "5px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const MySwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export const MyListItemButton = styled(ListItemButton)(
  ({ theme, estimate }) => ({
    "&.Mui-selected": {
      backgroundColor: estimate
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark,
    },

    "&:hover": {
      backgroundColor: estimate
        ? theme.palette.secondary.light
        : theme.palette.primary.light,
    },
  })
);

export const MyBox = styled(Box)(({ theme }) => ({
  marginTop: "56px",
  [theme.breakpoints.up("sm")]: {
    marginTop: "64px",
  },
}));
