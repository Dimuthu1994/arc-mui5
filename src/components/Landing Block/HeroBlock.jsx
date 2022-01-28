import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../animations/landinganimation/data";
import { Button, Grid, Typography } from "@mui/material";
import ButtonArrow from "../ui/5.1 ButtonArrow";

function HeroBlock(props) {
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
    <Grid container direction="column">
      <Grid item>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sm>
            <Typography variant="h2" align="center">
              Bringing West Cost Technology
              <br />
              to the midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm sx={(theme) => ({ ...theme.animation })}>
            {View}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
