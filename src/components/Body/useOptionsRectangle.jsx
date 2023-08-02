import { useState, useMemo, useEffect } from "react";
import { ANIMATION_POINT, getAnimation } from "./animate";

export const useOptionsRectangle = (index, animate) => {
  const [width, setWidth] = useState(300);
  const [prevAnimation, setPrevAnimation] = useState();
  const [height, setHeight] = useState(300);
  const [isSmallScreen, setIsSmallScreen] = useState(window.outerWidth <= 1300);
  const [styleRectangle, setStyleRectangle] = useState({});

  useEffect(() => {
    const calculateWidthWindow = (width) => {
      if (width <= 1300) {
        setIsSmallScreen(true);
        setWidth(200);
        setHeight(200);
        return;
      }

      setWidth(300);
      setHeight(300);
      setIsSmallScreen(false);
    };

    addEventListener("resize", ({ target: { innerWidth } }) =>
      calculateWidthWindow(innerWidth)
    );

    return function cleanUp() {
      removeEventListener("resize", calculateWidthWindow);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setWidth(200);
      setHeight(200);
      return;
    }
    setWidth(300);
    setHeight(300);
  }, [isSmallScreen]);

  useEffect(() => {
    if (prevAnimation !== animate[index]) setPrevAnimation(animate[index]);
  }, [animate]);

  useEffect(() => {
    if (isSmallScreen) {
      setStyleRectangle({ width: `${width}px`, height: `${height}px` });
      return;
    }

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
  }, [prevAnimation, isSmallScreen]);

  return useMemo(() => {
    return { styleRectangle, setStyleRectangle };
  }, [styleRectangle]);
};
