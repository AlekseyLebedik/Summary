import { useState, useMemo, useEffect } from "react";
import { ANIMATION_POINT, getAnimation } from "./animate";

export const useOptionsRectangle = (index, animate) => {
  const [width, setWidth] = useState(300);
  const [prevAnimation, setPrevAnimation] = useState();
  const [height, setHeight] = useState(300);
  const [styleRectangle, setStyleRectangle] = useState({});

  useEffect(() => {
    if (prevAnimation !== animate[index]) setPrevAnimation(animate[index]);
  }, [animate]);

  useEffect(() => {
    const bounce = animate[index] === ANIMATION_POINT.returned ? 500 : 1000;
    const { start = {}, end = {} } = getAnimation(
      index,
      animate[index],
      bounce
    );

    setTimeout(() => {
      setStyleRectangle({ width, height, ...end });
    }, bounce - 30);

    setStyleRectangle({
      ...start,
      width: `${width}px`,
      height: `${height}px`,
    });
  }, [prevAnimation]);

  return useMemo(() => {
    return { styleRectangle, setStyleRectangle };
  }, [styleRectangle]);
};
