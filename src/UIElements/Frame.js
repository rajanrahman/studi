import React from "react";

import "./Frame.css";

const Frame = props => {
  return (
    <div className="frame">
      <div className="frame-modal">
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Frame;
