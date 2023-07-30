import React, { useCallback, useRef } from "react";
import { Title } from "../TitleCustom/TitleCustom";
import { InputForm, MessageForm } from "./components/InputForm/InputForm";

import "./ContactTitle.scss";

export const ContactTitle = ({ contactTitle, onClickContact }) => {
  const labelRef = useRef();
  const onClickAreaHandler = useCallback(() => {
    for (const [_, callback] of Object.entries(labelRef.current ?? {})) {
      callback(false);
    }
  });

  return (
    <div className="contact">
      <Title title="Contact me:" iconClass="pi-bell" onClick={onClickContact} />
      <div
        className={`contact__describe ${
          contactTitle ? "contact__describe--open" : "contact__describe--close"
        }`}
      >
        <div className="contact__form" onClick={onClickAreaHandler}>
          <InputForm
            label="email"
            placeholder="Enter your email"
            labelRef={labelRef}
          />
          <MessageForm
            label="message"
            placeholder="Enter your message"
            labelRef={labelRef}
          />
        </div>
      </div>
    </div>
  );
};
