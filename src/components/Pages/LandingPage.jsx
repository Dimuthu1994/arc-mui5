import React from "react";
import CallToActionBlock from "../Landing Block/CallToActionBlock";
import HeroBlock from "../Landing Block/HeroBlock";
import { MainContainer } from "../Landing Block/HeroBlock.elements";
import InformationBlock from "../Landing Block/InformationBlock";
import RevolutionBlock from "../Landing Block/RevolutionBlock";
import ServicesBlock from "../Landing Block/ServicesBlock";

function LandingPage({ setValue, setSelectedIndex }) {
  return (
    <MainContainer container direction="column">
      <HeroBlock setValue={setValue} />
      <ServicesBlock setValue={setValue} setSelectedIndex={setSelectedIndex} />
      <RevolutionBlock setValue={setValue} />
      <InformationBlock setValue={setValue} />
      <CallToActionBlock setValue={setValue} />
    </MainContainer>
  );
}

export default LandingPage;
