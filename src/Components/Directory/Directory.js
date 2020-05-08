// global modules
import React, { Component } from "react";
// components
import Card from "../Card/Card";
// data modules
import SECTIONS_DATA from "../../data/sections";
// styles
import "./directory.scss";

class Directory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="directory-menu">
        {SECTIONS_DATA.map(({ id, ...sectionProps }) => {
          return <Card key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
