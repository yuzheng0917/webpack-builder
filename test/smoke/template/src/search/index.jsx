import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.png";
import "./search.less";

class Search extends React.Component {
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import("./text.jsx").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        <button type="button" onClick={this.loadComponent.bind(this)}>
          搜索文字的内容
        </button>
        <img alt="" src={logo} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));