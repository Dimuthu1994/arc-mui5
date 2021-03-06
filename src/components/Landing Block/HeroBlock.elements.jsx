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
  ...theme.typography.learnButton,
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

export const LearnButtonServices = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  whiteSpace: "nowrap",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
}));

export const IconServices = styled("img")(({ theme }) => ({
  ...theme.iconService,
}));

export const EstimateButtonCall = styled(EstimateButton)(({ theme }) => ({
  height: 80,
  width: 205,
  fontSize: "1.5rem",
  color: "white",
  marginRight: "4em",
  marginLeft: "2em",

  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));
