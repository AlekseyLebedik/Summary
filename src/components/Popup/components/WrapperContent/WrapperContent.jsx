import React from "react";

import "./WrapperContent.scss";

export const WrapperContent = ({ title, children }) => (
  <div className="wrapper-content">
    <div className="wrapper-content__title">{title}</div>
    <div className="wrapper-content__children">{children}</div>
  </div>
);
