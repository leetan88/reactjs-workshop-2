import React, { Component } from "react";
import { render } from "react-dom";

const styles = {};

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }
  handleActiveTab = index => {
    this.setState({
      tabIndex: index
    });
  };
  showCountryTab = () => {
    var { data } = this.props;
    var result = null;
    if (data.length > 0) {
      result = data.map((item, index) => {
        var styleTab =
          this.state.tabIndex === index ? styles.activeTab : styles.tab;
        return (
          <div
            className="Tab"
            style={styleTab}
            onClick={() => this.handleActiveTab(index)}
          >
            {item.name}
          </div>
        );
      });
    }
    return result;
  };
  render() {
    var { data } = this.props;
    var { tabIndex } = this.state;
    return (
      <div className="Tabs">
        {this.showCountryTab()}
        <div className="TabPanel" style={styles.panel}>
          <div>{data[tabIndex].description}</div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs data={this.props.countries} />
      </div>
    );
  }
}

const data = [
  {
    id: 1,
    name: "USA",
    description: "Land of the Free, Home of the brave"
  },
  {
    id: 2,
    name: "Brazil",
    description: "Sunshine, beaches, and Carnival"
  },
  { id: 3, name: "Russia", description: "World Cup 2018!" }
];

render(<App countries={data} />, document.getElementById("root"));
