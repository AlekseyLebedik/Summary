import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as images from "@image-assets";
import Popup from "../Popup/Popup";
import { Rectangle } from "./components/Rectangle/Rectangle";
import "./Body.scss";
import { ANIMATION_POINT } from "./animate";
import { AboutTitle } from "./components/AboutTitle/AboutTitle";
import { ContactTitle } from "./components/ContactTitle/ContactTitle";

const Items = [
  {
    title: "Companies",
    image: images.companyPhoto,
    uniqKey: "uniqkeu3",
  },
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
];

export const Body = () => {
  const wrapperRef = useRef();
  const [clickedRectangle, setClickedRectangle] = useState({
    status: false,
    currentRectangle: null,
  });
  const [aboutTitle, setAboutTitle] = useState(true);
  const [contactTitle, setContactTitle] = useState(false);

  const onClickAbout = useCallback(() => {
    if (contactTitle) {
      setContactTitle(false);
      setAboutTitle(!aboutTitle);
    } else {
      setAboutTitle(!aboutTitle);
    }
  }, [contactTitle, aboutTitle]);

  const onClickContact = useCallback(() => {
    if (aboutTitle) {
      setAboutTitle(false);
      setContactTitle(!contactTitle);
    } else {
      setContactTitle(!contactTitle);
    }
  }, [contactTitle, aboutTitle]);

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
      <Popup
        setAnimate={setAnimate}
        activePopup={clickedRectangle.status}
        currentRectangle={clickedRectangle.currentRectangle}
        setActivePopup={setClickedRectangle}
      />
      <div className="rectangels-wrapper" ref={wrapperRef}>
        <div className="rectangels-wrapper__center">
          <span className={`${clickedRectangle.status && "hide"}`}>
            Click the card
          </span>
        </div>
        {Rectangels}
        <div className="rectangels-wrapper__introduce">
          <AboutTitle onClickAbout={onClickAbout} aboutTitle={aboutTitle} />
          <ContactTitle
            onClickContact={onClickContact}
            contactTitle={contactTitle}
          />
        </div>
      </div>
    </div>
  );
};
