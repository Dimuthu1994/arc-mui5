import { Button, Grid, styled } from "@mui/material";

export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimateButton,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50px",
  marginRight: "40px",
  whiteSpace: "nowrap",
  height: 45,
  width: 145,

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const LearnButtonHero = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.common.blue,
  color: theme.palette.common.blue,
  borderRadius: "50px",
  borderWidth: 2,
  textTransform: "none",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "0.9rem",
  whiteSpace: "nowrap",
  height: 45,
  width: 145,
}));

export const MainContainer = styled(Grid)(({ theme }) => ({
  marginTop: "5em",
  [theme.breakpoints.down("md")]: {
    marginTop: "3em",
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: "2em",
  },
}));
