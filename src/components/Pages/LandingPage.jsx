import React from "react";
import HeroBlock from "../Landing Block/HeroBlock";
import { MainContainer } from "../Landing Block/HeroBlock.elements";
import RevolutionBlock from "../Landing Block/RevolutionBlock";
import ServicesBlock from "../Landing Block/ServicesBlock";

function LandingPage(props) {
  return (
    <MainContainer container direction="column">
      <HeroBlock />
      <ServicesBlock />
      <RevolutionBlock />
    </MainContainer>
  );
}

export default LandingPage;
