import { styled } from "@mui/material/styles";

//All variations

export const MyFooter = styled("footer")(({ theme }) => ({
  ...theme.footer,
}));

export const MyAdornment = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom", // otherwise small blue bottom

  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));
