import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = props => {
  if (props.href) {
    return (
      <a className={`btn ${props.styleProp}`} href={props.href}>
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`btn ${props.styleProp}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      className={`btn ${props.styleProp}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
