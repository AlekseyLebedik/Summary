import React, { useEffect, useMemo, useState } from "react";
import { ANIMATION_POINT } from "../Body/animate";
import { ComponyContent } from "./components/ComponyContent/ComponyContent";
import { SkillsContent } from "./components/SkilsContent/SkilsContent";

import "./Popup.scss";
import { RoadmapContent } from "./components/RoadmapContent/RoadmapContent";

export default ({
  activePopup,
  setActivePopup,
  setAnimate,
  currentRectangle,
}) => {
  const classAnimate = useMemo(() => {
    return activePopup ? "popup-event--open" : "popup-event--close";
  }, [activePopup]);

  const ContentTemplate = useMemo(() => {
    switch (currentRectangle?.title.toUpperCase()) {
      case "COMPANIES":
        return <ComponyContent />;
      case "SKILLS":
        return <SkillsContent />;
      case "ROADMAP":
        return <RoadmapContent />;
    }
  }, [currentRectangle]);

  if (!currentRectangle) return null;

  return (
    <div className={`popup-event ${classAnimate}`}>
      <div className={`popup-event__content`}>
        <div className="popup-event__rectangle">
          <div className="shadow" />
          <img src={currentRectangle.image} alt={currentRectangle.title} />
        </div>
        <div
          className="popup-event__exit-btn"
          onClick={() => {
            setActivePopup((prev) => ({ ...prev, status: false }));
            setAnimate([
              ANIMATION_POINT.start,
              ANIMATION_POINT.start,
              ANIMATION_POINT.start,
            ]);
          }}
        >
          <i className="pi pi-times" />
        </div>
        <div
          className={`describe ${
            activePopup ? "describe--appear" : "describe--disappear"
          }`}
        >
          <div className="describe__content">{ContentTemplate}</div>
        </div>
      </div>
    </div>
  );
};
