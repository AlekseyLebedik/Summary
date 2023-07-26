import React, { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";

import "./Clipboard.scss";
import { useCopyToClipboard } from "./useClipboard";

export const Clipboard = ({ text, positionToast }) => {
  const toastRef = useRef(null);
  const [_, onCopy] = useCopyToClipboard();

  const [clipboardStatus, setClipboardStatus] = useState();
  const [iconEvent, setIconEvent] = useState("pi-copy");

  const showToast = ({ severity, message }) =>
    toastRef.current.show({
      severity: severity,
      summary: "Copying e-mail",
      detail: message,
    });

  useEffect(() => {
    if (clipboardStatus) {
      setIconEvent(clipboardStatus ? "pi-check" : "pi-times");
      setTimeout(() => {
        setIconEvent("pi-copy");
      }, 700);
    }
  }, [clipboardStatus]);

  return (
    <>
      <Toast ref={toastRef} position={positionToast} />
      <i
        className={`pi ${iconEvent} clipboard`}
        onClick={async () => {
          const copyStatus = await onCopy(text);
          showToast({
            severity: copyStatus ? "success" : "error",
            message: copyStatus
              ? "You've successfully copied the email"
              : "Failed to copy email",
          });
          setClipboardStatus({ status: copyStatus });
        }}
      />
    </>
  );
};
