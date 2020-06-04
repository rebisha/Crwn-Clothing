// global modules
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { array } from "prop-types";
// components
import CollectionPreview from "../CollectionPreview/CollectionPreview";
// redux
import { selectShopCollections } from "../../Redux/Shop/selector";
// styles
import "./collectionOverview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {
  collections: array
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
