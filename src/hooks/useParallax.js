import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const layers = Array.from(document.querySelectorAll(".parallax-layer"));
    if (!layers.length) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY || 0;

      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed || "0.2");
        const translate = Math.min(y * speed, 220);
        layer.style.transform = `translate3d(0, ${translate}px, 0)`;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
