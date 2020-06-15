// global modules
import React from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
// components
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
// redux
import { selectCollection } from "../../Redux/Shop/selector";
// styles
import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  console.log("@@ match", collection);

  return <h1>Collection Page</h1>;
};

CollectionPage.propTypes = {
  collection: object
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
