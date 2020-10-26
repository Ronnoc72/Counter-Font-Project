import React from "react";
import ReactDOM from "react-dom";
// Connor Paxman
// 10 / 24 / 2020
// font project 1.0

const arr = ["bold", "normal"];
const fonts = ["Lato", "sans-serif"];
var index = 0;
var font_index = 0;

class Num extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 12, weight: "normal", family: "sans-serif" };
  }
  increase = () => {
    if (this.state.count >= 80) {
      this.setState({ count: (this.state.count = 80) });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count >= 80) {
      this.setState({ count: (this.state.count = 80) });
    }
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count < 1) {
      this.setState({ count: this.state.count = 1 });
    }
  };

  decreaseLong = () => {
    this.setState({ count: this.state.count - 10 });
    if (this.state.count < 1) {
      this.setState({ count: (this.state.count = 1) });
    }
  };

  increaseLong = () => {
    if (this.state.count >= 80) {
      this.setState({ count: (this.state.count = 80) });
    } else {
      this.setState({ count: this.state.count + 10 });
    }
    if (this.state.count >= 80) {
      this.setState({ count: (this.state.count = 80) });
    }
  };

  weightChange = () => {
    this.setState({ weight: (this.state.weight = arr[index]) });
    index += 1;
    if (index >= arr.length) {
      index = 0;
    }
  };

  changeFont = () => {
    this.setState({ family: (this.state.family = fonts[font_index]) });
    font_index += 1;
    if (font_index >= fonts.length) {
      font_index = 0;
    }
  };

  render() {
    var input = document.getElementById("user").value;

    var myStyle = {
      fontSize: this.state.count,
      fontWeight: this.state.weight,
      fontFamily: this.state.family
    };

    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decreaseLong}>--</button>
        <button onClick={this.increaseLong}>++</button>
        <tabel>
          <tr>
            <button onClick={this.weightChange}>Try different weights</button>
          </tr>
          <tr>{this.state.weight}</tr>
        </tabel>
        <tabel>
          <tr>
            <button onClick={this.changeFont}>Change Fonts</button>
          </tr>
          <tr>{this.state.family}</tr>
        </tabel>
        <p style={myStyle}>Font Size: {this.state.count}</p>
        <p style={myStyle}>{input}</p>
      </div>
    );
  }
}

ReactDOM.render(<Num />, document.getElementById("root"));
