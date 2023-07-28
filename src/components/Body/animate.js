export const ANIMATION_POINT = {
  start: "@STARTING_ANIMATION",
  clicked: "@CLICKED_ANIMATION",
  returned: "@RETURNED_ANIMATION",
};

const animateTransform = (
  translate,
  scale = 1,
  rotate = 0,
  point,
  stage,
  bounce
) => {
  const opacity =
    (point === ANIMATION_POINT.returned && stage === "end") ||
    point === ANIMATION_POINT.start
      ? 1
      : 0.8;

  return {
    transform: `scale(${scale}) translate(${translate}) rotate(${rotate}deg)`,
    zIndex: point === ANIMATION_POINT.clicked ? 1 : 10,
    transition:
      point === ANIMATION_POINT.returned
        ? `all ${bounce}ms easy`
        : `transform ${bounce}ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
    opacity,
  };
};

const animatePostion = (indexRectangle, position, point, bounce) => {
  return {
    start: animateTransform(
      position[indexRectangle].translate[0],
      position[indexRectangle].scale[0],
      position[indexRectangle].rotate[0],
      point,
      "start",
      bounce
    ),
    end: animateTransform(
      position[indexRectangle].translate[1],
      position[indexRectangle].scale[1],
      position[indexRectangle].rotate[1],
      point,
      "end",
      bounce
    ),
  };
};

export const getAnimation = (indexRectangle, point, bounce) => {
  let position;
  switch (point) {
    case ANIMATION_POINT.clicked:
      position = [
        {
          translate: ["-170px, 0", "-170px, 0px"],
          scale: [0.45, 0.45],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "-170px, 0px"],
          scale: [0.45, 0.45],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "-170px, 0px"],
          scale: [0.45, 0.45],
          rotate: [0, 0],
        },
      ];
      return animatePostion(indexRectangle, position, point, bounce);
    case ANIMATION_POINT.returned:
      position = [
        {
          translate: ["-170px, 0", "0px, -240px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "240px, 0px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "0px, 270px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
      ];
      return animatePostion(indexRectangle, position, point, bounce);

    case ANIMATION_POINT.start:
      position = [
        {
          translate: ["-170px, 0", "0px, -240px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "240px, 0px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
        {
          translate: ["-170px, 0", "0px, 270px"],
          scale: [0.45, 1],
          rotate: [0, 0],
        },
      ];
      return animatePostion(indexRectangle, position, point, bounce);
  }
};
