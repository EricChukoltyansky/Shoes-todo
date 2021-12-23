import React from "react";
import { Link } from "react-router-dom";
import user from "../images/pexels-cliff-booth-6591576.jpg";

const ContactDetail = (props) => {
  const { name, style } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{style}</div>
        </div>
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue center">
              Back to the shoe list
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
