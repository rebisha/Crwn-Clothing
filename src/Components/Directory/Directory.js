import React, { Component } from "react";
import Card from "../Card/Card";
import DataModel from "../../data/sections";
import "./directory.scss";

class Directory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="directory-menu">
        {DataModel.map(({ id, ...sectionProps }) => {
          return <Card key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
