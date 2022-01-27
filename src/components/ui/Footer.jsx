import React from "react";
import { MyAdornment, MyFooter } from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";

function Footer(props) {
  return (
    <>
      <MyFooter>
        <MyAdornment src={footerAdornment} alt="black decoration" />
      </MyFooter>
    </>
  );
}

export default Footer;
