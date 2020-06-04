// global modules
import React from "react";
import { object } from "prop-types";
// components
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
// styles
import "./categoryPage.scss";

const CategoryPage = ({ match }) => {
  console.log("@@ match", match);

  return <h1>Hello world</h1>;
};

CategoryPage.propTypes = {
  match: object
};

export default CategoryPage;
