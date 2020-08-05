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
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CollectionPage.propTypes = {
  collection: object
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
