import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery-but-heavy scroll: decelerates hard at the end, like a
 * wooden lever settling into place — no springy overshoot.
 */
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // higher = heavier, more resistance
      easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart: strong initial pull, long heavy settle
      smoothWheel: true,
      wheelMultiplier: 0.9, // damped, less floaty than default
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}

export default SmoothScroll;
