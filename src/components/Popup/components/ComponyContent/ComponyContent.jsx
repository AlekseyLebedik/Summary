import React from "react";

import {
  ret_1,
  ret_3,
  ret_4,
  ret_5,
  ret_6,
  ret_7,
  ret_8,
} from "@image-assets/retoucher";
import { d_1, d_3, d_4, d_7, d_8, d_9 } from "@image-assets/demonware";
import "./ComponyContent.scss";
import Carousel from "../Carousel/Carousel";
import { WrapperContent } from "../WrapperContent/WrapperContent";

const demonwareImages = [d_1, d_3, d_4, d_7, d_8, d_9];

const retoucherImages = [ret_1, ret_3, ret_4, ret_5, ret_6, ret_7, ret_8];

export const ComponyContent = () => {
  return (
    <WrapperContent title="Companies">
      <div className="company">
        <div className="company__item">
          <div className="company__title">
            <span className="comp">Demonware</span>
            <span className="skills">
              React js, Redux-Saga, MUI, AGG-rid, GraphQl, Apollo Client, D3 js,
              Jest, Cypress, SOLID.
            </span>
          </div>
          <div className="paragraph">
            It's a big project with its{" "}
            <span className="emphasis">own library</span>. Game direction, we
            were engaged in displaying game statistics in the form of tables. On
            this project I actively used{" "}
            <span className="emphasis">
              MUI, AGG-rid, GraphQl, Apollo Client, React js, Jest, Cypress.
            </span>
          </div>
          <div className="paragraph">
            <span className="emphasis">I implemented</span> a page
            <span className="emphasis"> Activity-parties</span> the essence of
            the page is that there are players who play in a party and I
            displayed a full report when and where they played, what is the user
            id.{" "}
            <span className="emphasis">
              I also actively worked with the schedule
            </span>{" "}
            where I displayed the main events for the team that use our
            demonware library.
            <span className="emphasis">
              I also actively worked with MM-trace page
            </span>{" "}
            in which I used <span className="emphasis">D3 js </span>to graph
            events in the party, which displayed the latest events on request of
            a particular idi for the coming month.
          </div>

          <div className="paragraph">
            Here I've honed my skills in React js as much as possible, worked
            tightly with <span className="emphasis">Redux-Saga</span> and
            touched on tests a bit. In general, here is how to build large
            projects in practice worked with{" "}
            <span className="emphasis">SOLID</span>
          </div>
          <Carousel products={demonwareImages} />
        </div>
        <div className="company__item">
          <div className="company__title">
            <span className="comp">Retoucher</span>
            <span className="skills">
              React JS, Redux-Saga, Primereact, Restfull API, SASS.
            </span>
          </div>
          <div className="paragraph">
            Last small freelance project. Most of the project was done
            independently. I worked with
            <span className="emphasis">
              React JS, Redux-Saga, Primereact, Restfull API, SASS
            </span>
            . From unusual - wrote my
            <span className="emphasis"> own calendar </span> for employees, made
            an interesting
            <span className="emphasis"> implementation of image loading, </span>
            made my <span className="emphasis">own admin panel.</span>
          </div>
          <div className="paragraph">
            Created a nice and <span className="emphasis">responsive UI </span>
            for mobile devices according to Figma design. Realized
            <span className="emphasis"> Portfolio page </span>
            where all works processed by Retoucher are displayed and
            <span className="emphasis"> Orders page </span>
            where all client orders are shown.
            <span className="emphasis"> Realized client's workspace</span> where
            he can select retoucher services for his photo.
          </div>
          <Carousel products={retoucherImages} />
        </div>
        <div className="company__item">
          <div className="company__title">
            <span className="comp"> Perspective Studio</span>
            <span className="skills">XML, Scss, Grunt, Javascript.</span>
          </div>
          <div className="paragraph">
            I used <span className="emphasis">MAGENTO FRAMEWORK </span> in this
            company. A big eco system with ready-made solutions. Basically it
            uses layout or theme reuse approach.
            <span className="emphasis"> I have worked with</span> a theme like
            <span className="emphasis"> Luma / Havy</span>. Wrote custom{" "}
            <span className="emphasis">widgets </span>
            worked with companies like
            <span className="emphasis"> Tefal, Chicco, Dr.Berg, Vine</span>. On
            Vine I practiced <span className="emphasis">React js</span>.
          </div>
          <div className="paragraph">
            The main technologies under the hood are
            <span className="emphasis"> XML, SCSS, GRUNT, JAVASCRIPT</span>.
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
