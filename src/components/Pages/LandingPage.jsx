import React from "react";
import HeroBlock from "../Landing Block/HeroBlock";
import { MainContainer } from "../Landing Block/HeroBlock.elements";
import InformationBlock from "../Landing Block/InformationBlock";
import RevolutionBlock from "../Landing Block/RevolutionBlock";
import ServicesBlock from "../Landing Block/ServicesBlock";

function LandingPage(props) {
  return (
    <MainContainer container direction="column">
      <HeroBlock />
      <ServicesBlock />
      <RevolutionBlock />
      <InformationBlock />
    </MainContainer>
  );
}

export default LandingPage;
