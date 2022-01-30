import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  EstimateButtonCall,
  LearnButtonServices,
} from "../Landing Block/HeroBlock.elements";
import ButtonArrow from "./5.1 ButtonArrow";

function CallToAction({ setValue }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={(theme) => ({ ...theme.background })}
      alignItems="center"
      justifyContent={matches ? "center" : "space-between"}
      direction={matches ? "column" : "row"}
    >
      <Grid
        item
        sx={{
          marginLeft: matches ? 0 : "5em",
          textAlign: matches ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of the 21st Century
            </Typography>
            <Grid
              item
              container
              justifyContent={matches ? "center" : undefined}
            >
              <LearnButtonServices variant="outlined">
                <span style={{ marginRight: 5 }}></span>Learn More
                <ButtonArrow width={15} height={15} fill="red" />
              </LearnButtonServices>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <EstimateButtonCall
          variant="contained"
          component={Link}
          to="/estimate"
          onClick={() => {
            setValue(false);
          }}
        >
          Free Estimate
        </EstimateButtonCall>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
