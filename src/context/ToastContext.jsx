import { Toast } from "primereact/toast";
import React, { useRef, createContext, useEffect, useState } from "react";

export const ToastContext = createContext(null);

export const ToastContextProvider = ({ children }) => {
  const toastRef = useRef();
  const [positionToast, setPositionToast] = useState();
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
    <ToastContext.Provider value={{ toastRef }}>
      <Toast ref={toastRef} position={positionToast} />
      {children}
    </ToastContext.Provider>
  );
};
