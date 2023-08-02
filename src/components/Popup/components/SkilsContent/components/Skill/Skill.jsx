import React, { useMemo } from "react";

import "./Skill.scss";

export default ({ skill, image, years }) => {
  const Bricks = new Array(years * 2)
    .fill(0)
    .map((_) => <div className="brick"></div>);

  return (
    <div className="skill">
      <div className="skill__title">
        <div className="image">{image}</div>
        <div className="name">{skill}</div>
      </div>
      <div className="skill__describe">
        <span className="years">
          {years}
          <span>years of experience</span>
        </span>
        <div className="bricks-container">{Bricks}</div>
      </div>
    </div>
  );
};
