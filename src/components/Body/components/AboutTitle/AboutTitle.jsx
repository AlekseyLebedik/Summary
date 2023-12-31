import React from "react";
import { Title } from "../TitleCustom/TitleCustom";

import "./AboutTitle.scss";

export const AboutTitle = ({ aboutTitle, onClickAbout }) => (
  <div className="about">
    <Title title="About me:" iconClass="pi-star" onClick={onClickAbout} />
    <div
      className={`about__describe ${
        aboutTitle ? "about__describe--open" : "about__describe--close"
      }`}
    >
      <div className="paragraph">
        Hey, I have a lot of commercial{" "}
        <span className="warn">experience for more than 3 years</span> in React
        js, I have worked in companies such as
        <span className="warn"> Demonware</span> and
        <span className="warn"> Perspective Studio</span>.
      </div>
      <div className="paragraph">
        You've come to the right place. I can help you with: <br />- Creating
        component library to <span className="warn">Storybook</span> based on
        <span className="warn"> Material UI</span> and{" "}
        <span className="warn">Figma</span> designs;
        <br /> - API implementation, design of independent front-end/back-end
        apps, landing pages builders, transportation online marketplaces; <br />
        - Refactoring old architectures to comply with modern technologies and
        approaches; <br />- Building apps from scratch; <br />- Development of
        complex UI, etc.
      </div>
      <div className="paragraph">
        For building the best apps and bringing the best solutions to my clients
        I use modern <span className="warn">JavaScript frameworks</span> and{" "}
        <span className="warn">React JS</span> for frontend and to create a
        stellar finished product I implement API integrations on the backend.
      </div>
      <div className="paragraph">
        More information can be found inside the card.
        <span className="warn"> Just click on the card</span>
      </div>
    </div>
  </div>
);
