import { Grid, Typography, useMediaQuery } from "@mui/material";
import {
  LearnButtonServices,
  IconServices,
} from "../Landing Block/HeroBlock.elements";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

import ButtonArrow from "../ui/5.1 ButtonArrow";
import React from "react";
import { Link } from "react-router-dom";

function ServicesPage({ setValue, setSelectedIndex }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Grid
        container
        sx={(theme) => ({
          ...theme.serviceContainer,
          marginTop: matches ? "3em" : "5em",
        })}
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
          <LearnButtonServices
            variant="outlined"
            component={Link}
            to="/customSoftware"
            onClick={() => {
              setValue(1);
              setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 10 }}></span>Learn More
            <ButtonArrow width={15} height={15} fill="red" />
          </LearnButtonServices>
        </Grid>
        <Grid item>
          <IconServices alt="custom software icon" src={customSoftwareIcon} />
        </Grid>
      </Grid>

      {/* mobile apps */}
      <Grid
        container
        sx={(theme) => ({
          ...theme.serviceContainer,
          marginTop: matches ? "3em" : "5em",
        })}
        justifyContent={matches ? "center" : "flex-end"}
      >
        <Grid
          item
          sx={{
            textAlign: matches ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Mobile Apps Development</Typography>
          <Typography variant="subtitle1">
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant="subtitle1">
            Increase your web experiance or create a standalone app
            {matches ? null : <br />} with either mobile platform.
          </Typography>
          <LearnButtonServices
            variant="outlined"
            component={Link}
            to="/mobileapps"
            onClick={() => {
              setValue(1);
              setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}></span>Learn More
            <ButtonArrow width={15} height={15} fill="red" />
          </LearnButtonServices>
        </Grid>
        <Grid item>
          <IconServices
            alt="mobile phone icon"
            src={mobileAppsIcon}
            sx={{ marginRight: matches ? 0 : "5em" }}
          />
        </Grid>
      </Grid>

      {/* websitesIcon */}
      <Grid
        container
        sx={(theme) => ({
          ...theme.serviceContainer,
          marginTop: matches ? "3em" : "5em",
        })}
        justifyContent={matches ? "center" : undefined}
      >
        <Grid
          item
          sx={{
            textAlign: matches ? "center" : undefined,
            marginLeft: matches ? 0 : "5em",
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1">
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimize for Search Engines built for speed.
          </Typography>
          <LearnButtonServices
            variant="outlined"
            component={Link}
            to="/websites"
            onClick={() => {
              setValue(1);
              setSelectedIndex(3);
            }}
          >
            <span style={{ marginRight: 10 }}></span>Learn More
            <ButtonArrow width={15} height={15} fill="red" />
          </LearnButtonServices>
        </Grid>
        <Grid item>
          <IconServices alt="webite icon" src={websitesIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ServicesPage;
