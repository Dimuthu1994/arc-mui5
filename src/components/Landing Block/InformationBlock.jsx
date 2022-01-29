import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../ui/5.1 ButtonArrow";
import { LearnButtonServices } from "./HeroBlock.elements";

function InformationBlock({ setValue }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        sx={{ height: "80em" }}
        alignItems="center"
      >
        <Grid
          item
          container
          sx={{
            position: "absolute",
            textAlign: matchesXS ? "center" : "inherit",
          }}
          direction={matchesXS ? "column" : "row"}
          spacing={matchesXS ? 10 : 0}
        >
          <Grid
            item
            sx={{ marginLeft: matchesXS ? 0 : matches ? "2em" : "5em" }}
            sm
          >
            <Grid container direction="column">
              <Typography variant="h2" sx={{ color: "white" }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">Say hello!</Typography>
              <Grid item>
                <LearnButtonServices
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                  component={Link}
                  to="/contacts"
                  onClick={() => {
                    setValue(4);
                  }}
                >
                  <span style={{ marginRight: 10 }}></span>Learn More
                  <ButtonArrow width={15} height={15} fill="white" />
                </LearnButtonServices>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginRight: matchesXS ? 0 : matches ? "2em" : "5em",
              textAlign: matchesXS ? "center" : "right",
            }}
            sm
          >
            <Grid container direction="column">
              <Typography variant="h2" sx={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get Personal</Typography>
              <Grid item>
                <LearnButtonServices
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                  component={Link}
                  to="/about"
                  onClick={() => {
                    setValue(3);
                  }}
                >
                  <span style={{ marginRight: 10 }}></span>Learn More
                  <ButtonArrow width={15} height={15} fill="white" />
                </LearnButtonServices>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={(theme) => ({ ...theme.infoBackground })}></Box>
      </Grid>
    </Grid>
  );
}

export default InformationBlock;
