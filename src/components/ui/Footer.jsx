import React from "react";
import { MyAdornment, MyFooter } from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <MyFooter>
        <Grid container justifyContent="center" sx={{ position: "absolute" }}>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/"
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
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/customsoftware"
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                to="/mobileapps"
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Mobile App Development
              </Grid>
              <Grid
                component={Link}
                to="/websites"
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
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                The Revolution
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
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
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                About Us
              </Grid>
              <Grid
                component={Link}
                to="/about"
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Histroy
              </Grid>
              <Grid
                component={Link}
                to="/about"
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
                item
                sx={(theme) => ({ ...theme.typography.grid })}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <MyAdornment src={footerAdornment} alt="black decoration" />
      </MyFooter>
    </>
  );
}

export default Footer;
