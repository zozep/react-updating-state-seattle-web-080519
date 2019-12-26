// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      handleClick: false,
      theme: "blue",
      addressInfo: {
        street: null,
        number: null,
        city: "New York City",
        country: null
      }
    };
  }

  handleClick = () => {
    this.setState(
      {
        handleClick: true,
        currentTheme: "red",
        addressInfo: Object.assign({}, this.state.addressInfo, {
          city: "NOT New York City"
        })
      },
      () => console.log(this.state.handleClick)
    );
  };

  render() {
    return (
      <div>
        <p>I have {this.state.handleClick ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
export default ClickityClick;
