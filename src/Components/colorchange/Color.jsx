import React from "react";
import colors from "../../common/colors";
import "./color.scss";

class Color extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndexColor: 0,
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "pink";
  }

  handleClick = (index) => {
    document.body.style.backgroundColor = colors[index];
    this.setState({ currentIndexColor: index });
  };

  render() {
    return (
      <div id="app">
        <div className="colors">
          {colors.map((color, index) => (
            <button
              key={`color-${index}`}
              style={{ backgroundColor: color }}
              onClick={() => this.handleClick(index)}
              className={this.state.currentIndexColor === index ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default Color;
