// global modules
import React from "react";
import { withRouter } from "react-router-dom";
import { string, object } from "prop-types";
// styles
import "./card.scss";

const Card = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="sub-title">SHOP NOW </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: string.isRequired,
  imageUrl: string.isRequired,
  match: object,
  history: object,
  linkUrl: string,
  size: string
};

Card.defaultProps = {
  match: {},
  history: {},
  linkUrl: "home",
  size: "large"
};

export default withRouter(Card);
