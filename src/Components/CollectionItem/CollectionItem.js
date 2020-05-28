// global modules
import React from "react";
import { func, object } from "prop-types";
import { connect } from "react-redux";
// components
import Button from "../Button/Button";
// redux
import { addItem } from "../../Redux/Cart/action";
// styles
import "./collectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
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
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

CollectionItem.propTypes = {
  addItem: func,
  item: object
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
