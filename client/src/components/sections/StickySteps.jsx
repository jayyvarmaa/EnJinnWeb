import { motion } from 'framer-motion';
import './StickySteps.css';

const steps = [
  { title: 'Download Native Code', description: 'Clone the repository and hook straight into the native engine headers for absolute control.'},
  { title: 'Compile Tools', description: 'Run the bootstrapper and use CMake to compile the deterministic standalone runtime and ImGui editor.' },
  { title: 'Write Plugins', description: 'Write gameplay modules using our explicit component API as hot-reloadable DLLs.' }
];

export default function StickySteps() {
  return (
    <section className="section sticky-section">
      <div className="container sticky-container">
        {/* Left Sticky Column */}
        <div className="sticky-sidebar">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            How it <span className="sticky-title-accent">Works</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            A simple developer workflow optimized for zero-friction iteration.
          </motion.p>
        </div>

        {/* Right Scroll Column */}
        <div className="sticky-content">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="step-block glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
            >
              <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
