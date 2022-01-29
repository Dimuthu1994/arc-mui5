import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonArrow from "../ui/5.1 ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import { IconServices, LearnButtonServices } from "./HeroBlock.elements";
import { useMediaQuery } from "@mui/material";

function ServicesBlock(props) {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={(theme) => ({ ...theme.serviceContainer })}
      justifyContent={matches ? "center" : undefined}
    >
      <Grid
        item
        sx={{
          marginLeft: matches ? 0 : "5em",
          textAlign: matches ? "center" : undefined,
        }}
      >
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1">
          Save Energy. Save Time. Save Money
        </Typography>
        <Typography variant="subtitle1">
          Complete digital solution, from investigation to{" "}
          <span style={{ fontFamily: "Pacifico", color: "#ffba60" }}>
            celebration
          </span>
        </Typography>
        <LearnButtonServices variant="outlined">
          <span style={{ marginRight: 10 }}></span>Learn More
          <ButtonArrow width={15} height={15} fill="red" />
        </LearnButtonServices>
      </Grid>
      <Grid item>
        <IconServices alt="custom software icon" src={customSoftwareIcon} />
      </Grid>
    </Grid>
  );
}

export default ServicesBlock;
