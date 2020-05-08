// global modules
import React from "react";
import { string, array } from "prop-types";
// components
import CollectionItem from "../CollectionItem/CollectionItem";
// styles
import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4) // this line of code only shows 4 items in the collection
          .map(({ id, ...collectionItemProps }) => (
            <CollectionItem key={id} {...collectionItemProps} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: string.isRequired,
  items: array
};

CollectionPreview.defaultProps = {
  items: []
};

export default CollectionPreview;
