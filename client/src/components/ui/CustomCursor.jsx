import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(true);
  const cursorX = useSpring(0, { stiffness: 400, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia("(pointer: coarse)").matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDevice);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="custom-cursor-dot"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}
