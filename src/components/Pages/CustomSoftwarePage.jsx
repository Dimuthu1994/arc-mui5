import React from "react";
import { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Hidden } from "@mui/material";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import automationAnimation from "../../animations/automationAnimation/data.json";
import uxAnimation from "../../animations/uxAnimation/data";
import roots from "../../assets/root.svg";
import CallToAction from "../ui/CallToAction";
import { MainContainer } from "../Landing Block/HeroBlock.elements";

function CustomSoftwarePage({ setSelectedIndex, setValue }) {
  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(documentsOptions);
  const { ViewScale } = useLottie(scaleOptions);
  //   const { ViewAutomation } = useLottie(automationOptions);
  //   const { ViewUX } = useLottie(uxOptions);

  return (
    <>
      <Grid
        container
        direction="column"
        sx={(theme) => ({ ...theme.customSoftwareContainer })}
      >
        <Grid item container direction="row">
          <Hidden mdDown>
            <Grid
              item
              sx={(theme) => ({ ...theme.arrowContainer })}
              sx={{ marginRight: "1em", marginLeft: "-3.5em" }}
            >
              <IconButton
                component={Link}
                to="/services"
                sx={{ backgroundColor: "transparent" }}
                onClick={() => setSelectedIndex(0)}
              >
                <img src={backArrow} alt="Back to Services Page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            sx={(theme) => ({ ...theme.heading })}
          >
            <Grid item sx={{ marginBottom: "1em" }}>
              <Typography variant="h2">Custom Software Development</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                sunt animi perspiciatis iste hic facere.
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                distinctio porro odio, dignissimos odit placeat cum quae culpa.
                Facere nostrum natus beatae, molestias quo dolore iusto?
                Delectus soluta vitae fugit.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis natus at quis expedita iure aliquid sint obcaecati
                velit labore autem cum laudantium nisi rem, incidunt laborum
                nobis a enim id ullam, necessitatibus repudiandae fugiat
                officiis ducimus. Architecto itaque atque harum?
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                sunt animi perspiciatis iste hic facere.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item sx={(theme) => ({ ...theme.arrowContainer })}>
              <IconButton
                component={Link}
                to="/mobileapps"
                sx={{ backgroundColor: "transparent" }}
                onClick={() => setSelectedIndex(2)}
              >
                <img
                  src={forwardArrow}
                  alt="Forward to mobileapp development"
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "10em", marginBottom: "5em" }}
        >
          {" "}
          <Grid
            item
            container
            direction="column"
            md
            sx={{ maxWidth: "40em", marginBottom: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" sx={{ marginBottom: "1em" }}>
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="lightbulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            sx={{ maxWidth: "40em", marginBottom: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" sx={{ marginBottom: "1em" }}>
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="lightbulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            sx={{ maxWidth: "40em", marginBottom: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" sx={{ marginBottom: "1em" }}>
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="lightbulb" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item container sx={{ maxWidth: "40em" }} md>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">Digital Document and Data</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  veritatis sunt
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  numquam
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Box sx={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}>
                {View}
              </Box>
            </Grid>
          </Grid>

          <Grid item container sx={{ maxWidth: "40em" }} md>
            <Grid item md>
              <Lottie
                style={{ maxHeight: 260, maxWidth: 280 }}
                options={scaleOptions}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">Scale</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  officia dignissimos porro incidunt explicabo!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "5em", marginBottom: "5em" }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <img
                src={roots}
                alt="tree with roots extending out"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, dolor.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                fugit error qui repellat suscipit dolores velit ipsum deserunt
                doloremque laudantium!
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction="row" justifyContent="space-between">
          <Grid item container sx={{ maxWidth: "40em" }} md>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">Automation</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  veritatis sunt
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  numquam
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              {/* <Box sx={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}>
              {ViewAutomation}
            </Box> */}
              <Lottie
                options={automationOptions}
                isstopped="true"
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>

          <Grid item container sx={{ maxWidth: "40em" }} md>
            <Grid item md>
              {/* <Box sx={{ maxHeight: 260, maxWidth: 280 }}>{ViewUX}</Box> */}
              <Lottie
                options={uxOptions}
                isstopped="true"
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">User Experiance Design</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  officia dignissimos porro incidunt explicabo!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MainContainer container direction="column">
        <Grid item>
          <CallToAction setValue={setValue} />
        </Grid>
      </MainContainer>
    </>
  );
}

export default CustomSoftwarePage;
