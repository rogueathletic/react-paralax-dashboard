import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



import Banner from "./svg/Banner";
import CTA from "./svg/CTA";
import Clouds from "./svg/Clouds";
import Mountains0 from "./svg/MountainsLayer0";
import Mountains1 from "./svg/MountainsLayer1";
import Snowhill0 from "./svg/SnowhillLayer0";
import Snowhill1 from "./svg/SnowhillLayer1";
import Snowhill2 from "./svg/SnowhillLayer2";
import Snowhill3 from "./svg/SnowhillLayer3";
import Snowhill4 from "./svg/SnowhillLayer4";
import CommentsParalax from "./svg/CommentsParalax";
import EnvilopeParalax from "./svg/EnvilopeParalax";
import GearsParalax from "./svg/GearsParalax";
import StarsParalax from "./svg/StarsParalax";
import ClockParalax from "./svg/ClockParalax";
import CalendarParalax from "./svg/CalendarParalax";
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

const LandingParallaxHero = ({ yOffset }) => (
  <Container>
  {createParallaxLayer(CTA, yOffset, 2)}  
    {createParallaxLayer(Clouds, yOffset, 2)}
    {createParallaxLayer(Banner, yOffset, 2)}
    {createParallaxLayer(Mountains1, yOffset, 2)}
    {createParallaxLayer(Mountains0, yOffset, 3)}
    {createParallaxLayer(Snowhill4, yOffset, 6)}
    {createParallaxLayer(Snowhill3, yOffset, 7)}
    {createParallaxLayer(Snowhill2, yOffset, 8)}
    {createParallaxLayer(Snowhill1, yOffset, 9)}
    {createParallaxLayer(EnvilopeParalax, yOffset, 6)}
    {createParallaxLayer(GearsParalax, yOffset, 10)}
    {createParallaxLayer(ClockParalax, yOffset, 0)}
    {createParallaxLayer(CommentsParalax, yOffset, 5)}
    {createParallaxLayer(CalendarParalax, yOffset, 7)}
    {createParallaxLayer(StarsParalax, yOffset, 8)}
  
    <ParallaxFrontLayer>
      <TransitionParallaxImage />
      <Content/>
    </ParallaxFrontLayer>
  </Container>
);

LandingParallaxHero.propTypes = {
  yOffset: PropTypes.number.isRequired
};

export default LandingParallaxHero;
