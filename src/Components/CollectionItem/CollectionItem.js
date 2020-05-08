// global modules
import React from "react";
import { string, number } from "prop-types";
// styles
import "./collectionItem.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        key={id}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  name: string.isRequired,
  imageUrl: string.isRequired,
  price: number.isRequired,
  id: number
};

export default CollectionItem;
