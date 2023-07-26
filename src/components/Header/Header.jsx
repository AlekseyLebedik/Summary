import React, { useState, useEffect, useRef } from "react";
import * as images from "@image-assets";
import { Toast } from "primereact/toast";

import { Clipboard } from "../Clipboard/Clipboard";
import "./Header.scss";

export const Header = () => {
  const toastRef = useRef(null);
  const [copyEnvelope, setCopyEnvelope] = useState(false);
  const [positionToast, setPositionToast] = useState();

  const showToast = ({ severity, message }) =>
    toastRef.current.show({
      severity: severity,
      summary: "Copying e-mail",
      detail: message,
    });

  useEffect(() => {
    const positionToastResize = () => {
      const widthWindow = window.outerWidth;
      setPositionToast(widthWindow < 720 ? "top-right" : "top-left");
    };
    positionToastResize();
    addEventListener("resize", positionToastResize);

    return function cleanUp() {
      removeEventListener("resize", positionToastResize);
    };
  }, []);

  return (
    <div className="header">
      <Toast ref={toastRef} position={positionToast} />
      <div className="header__brands">
        <div className="title">Follows us: </div>
        <div className="brand">
          <a href="https://www.linkedin.com/in/aleksey-lebedik-07678a20a/">
            <i className="pi pi-linkedin" />
          </a>
        </div>
        <div className="brand">
          <a href="https://github.com/AlekseyLebedik">
            <i className="pi pi-github" />
          </a>
        </div>
      </div>
      <div className="header__photo">
        <div className="header__photo--wrapper">
          <img src={images.examplePhoto} alt="my photo" />
        </div>
      </div>
      <div className="header__info">
        <div className="title">
          <div className="title__name">
            <span>Oleksii</span>
            <span>Lebedyk</span>
          </div>
          <div className="title__position">
            Frontend Developer <span> / React js</span>
          </div>
        </div>
        <div className="contacts-icons">
          <i
            className="pi pi-phone item"
            onClick={() => window.open("tel:+48 888-411-495", "_self")}
          />
          <div
            className="contacts-icons__envelope "
            onMouseEnter={() => setCopyEnvelope(true)}
            onMouseLeave={() => setCopyEnvelope(false)}
          >
            {copyEnvelope ? (
              <Clipboard
                text="alekseylebedik1996@gmail.com"
                showToast={showToast}
              />
            ) : (
              <i className={"pi pi-envelope item"} />
            )}
          </div>
        </div>
        <div className="phone">
          <a href="tel:+48 888-411-495">+48 888-411-495</a>
          <div className="substrate"></div>
        </div>
        <div className="envelope">
          <span>alekseylebedik1996@gmail.com</span>
        </div>

        <div className="location">
          <span>Poland, Wroclaw</span>
        </div>
        <div className="location-icon">
          <i className="pi pi-map-marker"></i>
        </div>
      </div>
    </div>
  );
};
