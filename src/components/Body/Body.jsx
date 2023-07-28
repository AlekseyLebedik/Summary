import React, { useMemo, useRef, useState } from "react";
import * as images from "@image-assets";
import { Button } from "primereact/button";
import { Rectangle } from "./components/Rectangle/Rectangle";
import "./Body.scss";
import { ANIMATION_POINT } from "./animate";

const Items = [
  {
    title: "Skills",
    image: images.skilsPhoto,
    uniqKey: "uniqkeu1",
  },
  {
    title: "Achivments",
    image: images.achivmentsPhoto,
    uniqKey: "uniqkeu2",
  },
  {
    title: "Company",
    image: images.companyPhoto,
    uniqKey: "uniqkeu3",
  },
];

export const Body = (props) => {
  const wrapperRef = useRef();
  const [clickedRectangle, setClickedRectangle] = useState(false);

  const [animate, setAnimate] = useState([
    ANIMATION_POINT.start,
    ANIMATION_POINT.start,
    ANIMATION_POINT.start,
  ]);

  const Rectangels = useMemo(
    () =>
      Items.map((item, index) => {
        return (
          <Rectangle
            setClickedRectangle={setClickedRectangle}
            key={item.uniqKey}
            title={item.title}
            animate={animate}
            setAnimate={setAnimate}
            image={item.image}
            indexRectangle={index}
          />
        );
      }),
    [Items, animate]
  );

  return (
    <div className="body-container">
      <div className="rectangels-wrapper" ref={wrapperRef}>
        <div className="rectangels-wrapper__center">
          <span className={`${clickedRectangle && "hide"}`}>
            Click the card
          </span>
        </div>
        {Rectangels}
        <div className="rectangels-wrapper__introduce">
          <div className="about">About me:</div>
          <div className="paragraph">
            Hey, I have a lot of commercial{" "}
            <span className="warn">experience for more than 2 years</span> in
            React js, I have worked in companies such as
            <span className="warn"> Demonware</span> and
            <span className="warn"> Perspective Studio</span>.
          </div>
          <div className="paragraph">
            You've come to the right place. I can help you with: - Creating
            component library to <span className="warn">Storybook</span> based
            on
            <span className="warn">Material UI</span> and{" "}
            <span className="warn">Figma</span> designs; - API implementation,
            design of independent front-end/back-end apps, landing pages
            builders, transportation online marketplaces; - Refactoring old
            architectures to comply with modern technologies and approaches; -
            Building apps from scratch; - Development of complex UI, etc.
          </div>
          <div className="paragraph">
            For building the best apps and bringing the best solutions to my
            clients I use modern{" "}
            <span className="warn">JavaScript frameworks</span> and{" "}
            <span className="warn">React JS</span> for frontend and to create a
            stellar finished product I implement API integrations on the
            backend.
          </div>
          <div className="contact">
            <div className="contact__label">Contact us</div>
            <Button
              icon="pi pi-bell"
              severity="warning"
              aria-label="Notification"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
