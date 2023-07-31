import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { Title } from "../TitleCustom/TitleCustom";
import { ToastContext } from "@context/ToastContext";
import { InputForm, MessageForm } from "./components/InputForm/InputForm";

import "./ContactTitle.scss";

export const ContactTitle = ({ contactTitle, onClickContact }) => {
  const formRef = useRef();
  const labelRef = useRef();
  const [classAnimate, setClassAnimate] = useState();
  const { toastRef } = useContext(ToastContext);
  const [formDisabled, setFormDisabled] = useState();

  useEffect(() => {
    if (!classAnimate) setClassAnimate("contact__describe--start");
  }, []);

  useEffect(() => {
    if (classAnimate)
      setClassAnimate(
        contactTitle ? "contact__describe--open" : "contact__describe--close"
      );
  }, [contactTitle]);

  const showToast = useCallback(({ severity, message }) =>
    toastRef.current.show({
      severity: severity,
      summary: "Sending message",
      detail: message,
    })
  );

  const isDisabledSubmit = useMemo(() => {
    return !formDisabled?.message || !formDisabled?.email;
  }, [formDisabled]);

  const onClickAreaHandler = useCallback(() => {
    for (const [_, callback] of Object.entries(labelRef.current ?? {})) {
      callback(false);
    }
  });

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_cte40g9",
        "template_jenpmnl",
        formRef.current,
        "N3uoqeVXOuBs99nbZ"
      )
      .then(
        (_) => {
          showToast({
            severity: "success",
            message: "The message was successfully sent!",
          });
        },
        (error) => {
          showToast({
            severity: "error",
            message: "Something went wrong, try resubmitting the message",
          });
        }
      );
    event.target.reset();
  };

  return (
    <div className="contact">
      <Title title="Contact me:" iconClass="pi-bell" onClick={onClickContact} />
      <div className={`contact__describe ${classAnimate}`}>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="contact__form" onClick={onClickAreaHandler}>
            <InputForm
              label="email"
              type="email"
              placeholder="Enter your email"
              labelRef={labelRef}
              formDisabled={setFormDisabled}
            />
            <MessageForm
              label="message"
              placeholder="Enter your message"
              labelRef={labelRef}
              formDisabled={setFormDisabled}
            />
            <div
              className={`contact__submit ${
                isDisabledSubmit && "contact__disabled-submit"
              }`}
            >
              <input type="submit" />
              <span>Submit</span>
              <i className="pi pi-envelope" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
