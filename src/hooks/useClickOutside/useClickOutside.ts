import * as React from "react";

type ReactRef = {current: HTMLElement|null}

export const useClickOutside = (ref: ReactRef, callback: () => void) => {
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      event.stopPropagation()
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
