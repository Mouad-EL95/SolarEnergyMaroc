import React from "react";
const imageUrl ="./assets/main.jpg";
export default class HomeCard
 extends React.Component {
  render = () => {
    return (
      <div>
        <img src={imageUrl} height="150" width="150"></img>
        <h1>Card title</h1>
      </div>
    );
  };
}