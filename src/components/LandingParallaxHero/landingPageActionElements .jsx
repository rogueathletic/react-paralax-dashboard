import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CalendarParalax from "./svg/CalendarParalax";
import CommentsParalax from "./svg/CommentsParalax";
import EnvilopeParalax from "./svg/EnvilopeParalax";
import GearsParalax from "./svg/GearsParalax";
import StarsParalax from "./svg/StarsParalax";

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

const LandingPageActionElements = ({ yOffset }) => (
  <Container>
    {createParallaxLayer(Clouds, yOffset, 2)}
    {createParallaxLayer(Banner, yOffset, 2)}
    {createParallaxLayer(CardOne, yOffset, 2)}
    {createParallaxLayer(CardTwo, yOffset, 2)}
    {createParallaxLayer(CardThree, yOffset, 2)}
    {createParallaxLayer(Mountains0, yOffset, 3)}
    {createParallaxLayer(Mountains1, yOffset, 3)}
    {createParallaxLayer(Snowhill4, yOffset, 4)}
    {createParallaxLayer(Snowhill3, yOffset, 5)}
    {createParallaxLayer(Snowhill2, yOffset, 6)}
    {createParallaxLayer(Snowhill1, yOffset, 7)}
    {createParallaxLayer(CalendarParalax, yOffset, 2)}
    {createParallaxLayer(StarsParalax, yOffset, 3)}
    {createParallaxLayer(CommentsParalax, yOffset, 5)}
    {createParallaxLayer(EnvilopeParalax, yOffset, 6)}
    {createParallaxLayer(GearsParalax, yOffset, 7)}
  
    <ParallaxFrontLayer>
      <TransitionParallaxImage />
      <Content />
    </ParallaxFrontLayer>
  </Container>
);

LandingPageActionElements.propTypes = {
  yOffset: PropTypes.number.isRequired
};

export default LandingPageActionElements;
