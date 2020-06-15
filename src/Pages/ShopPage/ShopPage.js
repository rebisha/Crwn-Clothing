// global modules
import React from "react";
import { Route } from "react-router-dom";
import { object } from "prop-types";
//components
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

ShopPage.propTypes = {
  match: object
};

export default ShopPage;
