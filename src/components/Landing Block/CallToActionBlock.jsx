import { Grid } from "@mui/material";
import React from "react";
import CallToAction from "../ui/CallToAction";

function CallToActionBlock({ setValue }) {
  return (
    <Grid item>
      <CallToAction setValue={setValue} />
    </Grid>
  );
}

export default CallToActionBlock;
