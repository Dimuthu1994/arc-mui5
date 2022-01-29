import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, Typography } from "@mui/material";
import { LearnButtonServices } from "./HeroBlock.elements";
import ButtonArrow from "../ui/5.1 ButtonArrow";

function RevolutionBlock(props) {
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100em", marginTop: "10em" }}
      >
        <Card sx={(theme) => ({ ...theme.revolutionCard })}>
          <CardContent>
            <Grid container direction="column" sx={{ textAlign: "center" }}>
              <Grid item>
                {" "}
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution
                </Typography>
                <LearnButtonServices variant="outlined">
                  <span style={{ marginRight: 10 }}></span>Learn More
                  <ButtonArrow width={15} height={15} fill="red" />
                </LearnButtonServices>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box sx={(theme) => ({ ...theme.revolutionBackground })}></Box>
      </Grid>
    </Grid>
  );
}

export default RevolutionBlock;
