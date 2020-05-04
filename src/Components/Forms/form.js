import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({
      value: input
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form>
        <input type="text" value={value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
