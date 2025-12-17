import { useEffect } from "react";

export function useSmoothScroll(headerSelector = "#siteHeader") {
  useEffect(() => {
    const header = document.querySelector(headerSelector);

    const headerH = () => (header ? header.getBoundingClientRect().height : 0);

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = window.scrollY + el.getBoundingClientRect().top - headerH() - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href.length < 2) return;

      const id = href.slice(1);
      if (!document.getElementById(id)) return;

      e.preventDefault();
      scrollToId(id);
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [headerSelector]);
}
