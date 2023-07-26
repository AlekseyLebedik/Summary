import React, { useEffect, useState } from "react";
import "./Clipboard.scss";
import { useCopyToClipboard } from "./useClipboard";

export const Clipboard = ({ text, showToast }) => {
  const [_, onCopy] = useCopyToClipboard();
  const [clipboardStatus, setClipboardStatus] = useState();
  const [iconEvent, setIconEvent] = useState("pi-copy");

  useEffect(() => {
    if (clipboardStatus) {
      setIconEvent(clipboardStatus ? "pi-check" : "pi-times");
      setTimeout(() => {
        setIconEvent("pi-copy");
      }, 700);
    }
  }, [clipboardStatus]);

  return (
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
  );
};
