import React from "react";
import HeroBlock from "../Landing Block/HeroBlock";
import { MainContainer } from "../Landing Block/HeroBlock.elements";
import ServicesBlock from "../Landing Block/ServicesBlock";

function LandingPage(props) {
  return (
    <MainContainer container direction="column">
      <HeroBlock />
      <ServicesBlock />
    </MainContainer>
  );
}

export default LandingPage;
