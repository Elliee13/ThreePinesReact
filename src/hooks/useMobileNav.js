import { useEffect, useRef, useState } from "react";

export function useMobileNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    // ESC to close
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // focus + scroll lock
    if (open) {
      document.body.style.overflow = "hidden";
      queueMicrotask(() => firstLinkRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      queueMicrotask(() => toggleBtnRef.current?.focus());
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return {
    open,
    setOpen,
    toggle: () => setOpen((v) => !v),
    close: () => setOpen(false),
    firstLinkRef,
    toggleBtnRef,
  };
}
