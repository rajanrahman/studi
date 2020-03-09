import React from "react";

import "./Modal.css";

const Modal = props => {
  return (
    <div className={`sign-up-modal ${props.styleProp}`}>{props.children}</div>
  );
};

export default Modal;
