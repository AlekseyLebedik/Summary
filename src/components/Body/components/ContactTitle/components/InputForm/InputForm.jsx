import React, { useCallback, useEffect, useState } from "react";

import "./InputForm.scss";

const BasicInput = ({ placeholder, type, label, labelRef }) => {
  const [activeLabel, setActiveLabel] = useState(false);
  useEffect(() => {
    labelRef.current = labelRef.current
      ? { ...labelRef.current, [label]: setActiveLabel }
      : { [label]: setActiveLabel };
  }, []);

  const onClickLabelArea = useCallback(() => {
    for (const [labelInput, callback] of Object.entries(
      labelRef.current ?? {}
    )) {
      if (labelInput !== label) callback(false);
    }
  });

  return (
    <div
      className="input-form-basic"
      onClick={(event) => {
        event.stopPropagation();
        setActiveLabel(true);
        onClickLabelArea();
      }}
    >
      {label && (
        <span
          id={activeLabel ? "basic-label-input-active" : "basic-label-input"}
          className="input-form-basic__label"
        >
          {label}
        </span>
      )}
      <div className="input-form-basic__input">
        <input placeholder={placeholder} type={type} />
      </div>
    </div>
  );
};

export const InputForm = (props) => (
  <div className="input-form">
    <BasicInput {...props} />
  </div>
);

export const MessageForm = (props) => (
  <div className="message-form">
    <BasicInput {...props} />
  </div>
);
