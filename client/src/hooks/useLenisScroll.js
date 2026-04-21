import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenisScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = new Lenis({
      autoRaf: false, // We'll handle RAF manually
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [enabled]);
}
