import { motion } from 'framer-motion';

export default function Docs() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="section container"
        style={{ paddingTop: '160px' }}
    >
      <h2>Documentation</h2>
      <p>Read the official EnJinn Engine documentation.</p>
    </motion.div>
  );
}
