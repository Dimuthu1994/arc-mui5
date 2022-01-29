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
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em",
  },
}));

export const IconServices = styled("img")(({ theme }) => ({
  ...theme.iconService,
}));
