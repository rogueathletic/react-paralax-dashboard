import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { subscribe } from "subscribe-ui-event";
import LandingParallaxHero from "./components/LandingParallaxHero";
import "modern-normalize";
import "./components/global.css";

class App extends PureComponent {
  static propTypes = {
    maxHeight: PropTypes.number
  };

  static defaultProps = {
    maxHeight: 1000
  };

  constructor() {
    super();
    this.subscribers = [];
  }

  state = {
    yOffset: 0
  };

  componentDidMount() {
    this.subscribers.push(
      subscribe("scroll", this.handleScroll, {
        useRAF: true,
        enableScrollInfo: true
      })
    );
  }

  componentWillUnmount() {
    this.subscribers.map(sub => sub.unsubscribe());
  }

  handleScroll = (event, payload) => {
    const currentScrollY = payload.scroll.top;
    const { maxHeight } = this.props;

    if (currentScrollY <= maxHeight) {
      this.setState({ yOffset: currentScrollY });
    }
  };

  render() {
    const { yOffset } = this.state;
    return <LandingParallaxHero yOffset={yOffset} />;
  }
}

render(<App />, document.getElementById("root"));


export default App;