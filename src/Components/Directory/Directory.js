// global modules
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { array } from "prop-types";
// components
import Card from "../Card/Card";
// redux
import { selectDirectorySections } from "../../Redux/Directory/selector";
// styles
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <Card key={id} {...sectionProps} />;
      })}
    </div>
  );
};

Directory.propTypes = {
  sections: array
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
