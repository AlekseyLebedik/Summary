import React, { useCallback, useMemo } from "react";
import { ANIMATION_POINT } from "../../animate";

import "./Rectangle.scss";
import { useOptionsRectangle } from "../../useOptionsRectangle";

export const Rectangle = ({
  image,
  title,
  indexRectangle,
  animate,
  setAnimate,
  setClickedRectangle,
}) => {
  const clickedTitleClass = useMemo(() => {
    if (animate[indexRectangle] === ANIMATION_POINT.clicked) return "left";
    return "right";
  }, [animate]);

  const { styleRectangle } = useOptionsRectangle(indexRectangle, animate);

  const onClickHandler = useCallback(() => {
    setClickedRectangle(true);
    setAnimate(
      animate.map((anim, index) => {
        if (index === indexRectangle) return ANIMATION_POINT.clicked;
        if (anim === ANIMATION_POINT.clicked) return ANIMATION_POINT.returned;
        return anim;
      })
    );
  }, [animate]);

  return (
    <div
      className="rectangle"
      style={styleRectangle}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler();
      }}
    >
      <div className={`rectangle__title ${clickedTitleClass}`}>
        <i className="pi pi-star" />
        <span>{title}</span>
      </div>
      <div
        className="rectangle__clip"
        style={{
          width: styleRectangle?.width,
          height: styleRectangle?.height,
        }}
      >
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
