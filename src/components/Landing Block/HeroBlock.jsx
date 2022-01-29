import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../animations/landinganimation/data";
import { Grid, Typography } from "@mui/material";
import ButtonArrow from "../ui/5.1 ButtonArrow";
import { EstimateButton, LearnButtonHero } from "./HeroBlock.elements";
import { Link } from "react-router-dom";

function HeroBlock({ setValue }) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(options);
  return (
    <Grid item>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item sm sx={(theme) => ({ ...theme.heroTextContainer })}>
          <Typography variant="h2" align="center">
            Bringing West Cost Technology
            <br />
            to the midwest
          </Typography>
          <Grid
            container
            justifyContent="center"
            sx={(theme) => ({ ...theme.buttonContainer })}
          >
            <Grid item>
              <EstimateButton
                variant="contained"
                component={Link}
                to="/estimate"
                onClick={() => setValue(5)}
              >
                Free Estimate
              </EstimateButton>
            </Grid>
            <Grid item>
              <LearnButtonHero
                variant="outlined"
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Learn More <ButtonArrow width={15} height={15} fill="red" />
              </LearnButtonHero>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm sx={(theme) => ({ ...theme.animation })}>
          {View}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
