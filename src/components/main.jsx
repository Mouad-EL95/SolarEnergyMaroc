import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import HomeCard from "../cards/homeCard";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeSlide: ""
    };
  }
  slides = [
    {
      key: 1,
      content: <HomeCard />
    },
    {
      key: 2,
      content: <HomeCard />
    },
    {
      key: 3,
      content: <HomeCard />
    },
    {
      key: 4,
      content: <HomeCard />
    },
    {
      key: 5,
      content: <HomeCard />
    },
    {
      key: 6,
      content: <HomeCard />
    },
    {
      key: 7,
      content: <HomeCard />
    },
    {
      key: 8,
      content: <HomeCard />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ changeSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          changeSlide={this.state.changeSlide}
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    );
  }
}
export default Home;
