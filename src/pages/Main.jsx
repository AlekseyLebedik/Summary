import React from "react";
import { Header, Body } from "@components";
import { ToastContextProvider } from "../context/ToastContext";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { PrimeReactProvider } from "primereact/api";

import "./Main.scss";

export const MainPage = (props) => {
  return (
    <ToastContextProvider>
      <PrimeReactProvider>
        <div className="main-page">
          <Header />
          <Body />
        </div>
      </PrimeReactProvider>
    </ToastContextProvider>
  );
};
