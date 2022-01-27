import React from "react";
import {
  MyAdornment,
  MyFooter,
  MyIcon,
  MyIconContainer,
} from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function Footer({ setValue, setSelectedIndex }) {
  return (
    <>
      <MyFooter>
        <Hidden mdDown>
          <Grid container justifyContent="center" sx={{ position: "absolute" }}>
            <Grid item sx={{ margin: "3em" }}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  component={Link}
                  to="/"
                  onClick={() => setValue(0)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ margin: "3em" }}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  component={Link}
                  to="/services"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(0);
                  }}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Services
                </Grid>
                <Grid
                  component={Link}
                  to="/customsoftware"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(1);
                  }}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Custom Software Development
                </Grid>
                <Grid
                  component={Link}
                  to="/mobileapps"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(2);
                  }}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Mobile App Development
                </Grid>
                <Grid
                  component={Link}
                  to="/websites"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(3);
                  }}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Website Development
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ margin: "3em" }}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  The Revolution
                </Grid>
                <Grid
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Vision
                </Grid>
                <Grid
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Technology
                </Grid>
                <Grid
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ margin: "3em" }}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  component={Link}
                  to="/about"
                  onClick={() => setValue(3)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  About Us
                </Grid>
                <Grid
                  component={Link}
                  to="/about"
                  onClick={() => setValue(3)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Histroy
                </Grid>
                <Grid
                  component={Link}
                  to="/about"
                  onClick={() => setValue(3)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ margin: "3em" }}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  component={Link}
                  to="/contacts"
                  onClick={() => setValue(4)}
                  item
                  sx={(theme) => ({ ...theme.typography.grid })}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <MyAdornment src={footerAdornment} alt="black decoration" />
        <MyIconContainer container justifyContent="flex-end" spacing={1}>
          <Grid item>
            <MyIcon alt="facebook logo" src={facebook} />
          </Grid>
          <Grid item>
            <MyIcon alt="twitter logo" src={twitter} />
          </Grid>
          <Grid item>
            <MyIcon alt="instagram logo" src={instagram} />
          </Grid>
        </MyIconContainer>
      </MyFooter>
    </>
  );
}

export default Footer;
