import React, { useCallback, useEffect, useState } from "react";

import "./InputForm.scss";

const BasicInput = ({ isValid, label, labelRef, children }) => {
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
          className={`input-form-basic__label ${
            !isValid.status && isValid.touched && "error"
          }`}
        >
          {label}
        </span>
      )}
      <div className="input-form-basic__input">{children}</div>
      {isValid.touched && !isValid.status && (
        <div className="input-form-basic__message">{isValid.message}</div>
      )}
    </div>
  );
};

export const InputForm = ({ type, placeholder, formDisabled, ...props }) => {
  const regExp = new RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
  const [isValid, setIsValid] = useState({
    touched: false,
    status: false,
    message: "Incorrect e-mail address",
  });

  useEffect(() => {
    formDisabled((prev) => ({ ...prev, email: isValid.status }));
  }, [isValid]);

  return (
    <div className="input-form">
      <BasicInput {...props} isValid={isValid}>
        <input
          maxLength="50"
          name="user_email"
          onBlur={({ target }) => {
            if (regExp.test(target.value)) {
              setIsValid({ ...isValid, status: true, touched: true });
            } else {
              setIsValid({ ...isValid, status: false, touched: true });
            }
          }}
          placeholder={placeholder}
          type={type}
        />
      </BasicInput>
    </div>
  );
};

export const MessageForm = ({ type, placeholder, formDisabled, ...props }) => {
  const [isValid, setIsValid] = useState({
    touched: false,
    status: false,
    message: "Message is incorrect length, must be longer than 10 characters",
  });

  useEffect(() => {
    formDisabled((prev) => ({ ...prev, message: isValid.status }));
  }, [isValid]);

  return (
    <div className="message-form">
      <BasicInput {...props} isValid={isValid}>
        <textarea
          name="message"
          onBlur={({ target }) => {
            if (target.value.length > 9) {
              setIsValid({ ...isValid, status: true, touched: true });
            } else {
              setIsValid({ ...isValid, status: false, touched: true });
            }
          }}
          placeholder={placeholder}
          type={type}
          rows="10"
          cols="30"
          minLength="10"
          maxLength="500"
        />
      </BasicInput>
    </div>
  );
};
