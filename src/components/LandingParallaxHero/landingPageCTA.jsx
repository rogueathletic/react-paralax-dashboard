import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


import CardOne from "./svg/CardOne";
import CardTwo from "./svg/CardTwo";
import CardThree from "./svg/CardThree";


const Container = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ParallaxLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ParallaxFrontLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const TransitionParallaxImage = styled(Snowhill0)`
  max-width: 100%;
  vertical-align: bottom;
`;

const Content = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const createParallaxLayer = (image, yOffset, multiplicator) => (
  <ParallaxLayer
    style={{
      transform: `translate3d(0, -${(yOffset * multiplicator) / 10}px, 0)`
    }}
  >
    {image()}
  </ParallaxLayer>
);

const LandingPageCTA = ({ yOffset }) => (
  <ctaCards>
  
    {createParallaxLayer(CardOne, yOffset, 2)}
    {createParallaxLayer(CardTwo, yOffset, 2)}
    {createParallaxLayer(CardThree, yOffset, 2)}
   
  
    <ParallaxFrontLayer>
      <TransitionParallaxImage />
      <Content />
    </ParallaxFrontLayer>
  </ctaCards>
);

LandingPageCTA.propTypes = {
  yOffset: PropTypes.number.isRequired
};

export default LandingPageCTA;
