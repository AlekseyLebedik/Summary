import React from "react";

import "./TitleCustom.scss";

export const Title = ({ title, iconClass, onClick }) => (
  <div className="global-title" onClick={onClick}>
    <div className="global-title__text">{title}</div>
    <i className={`global-title__icon pi ${iconClass}`} />
  </div>
);
