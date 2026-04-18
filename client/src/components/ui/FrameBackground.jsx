import { motion, useReducedMotion } from 'framer-motion';
import './FrameBackground.css';

export default function FrameBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="frame-background"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: 'easeOut' }}
      aria-hidden="true"
    />
  );
}
