import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

//All variations

export const MyFooter = styled("footer")(({ theme }) => ({
  ...theme.footer,
}));

export const MyAdornment = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom", // otherwise small blue bottom

  [theme.breakpoints.down("md")]: {
    width: "18em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "13em",
  },
}));

export const MyIcon = styled("img")(({ theme }) => ({
  ...theme.footerIcons,
}));

export const MyIconContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  marginTop: "-4em",
  right: "1em",

  [theme.breakpoints.down("sm")]: {
    marginTop: "-3em",
  },
}));
