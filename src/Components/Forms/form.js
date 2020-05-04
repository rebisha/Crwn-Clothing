import React, { Component } from "react";
import "./form.scss";

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
        <label className="formLabel">Hello World!!</label>
        <input type="text" value={value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
