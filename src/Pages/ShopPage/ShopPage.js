// global modules
import React, { Component } from "react";
// data module
import SHOP_DATA from "../../data/shop";
//components
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="container">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
