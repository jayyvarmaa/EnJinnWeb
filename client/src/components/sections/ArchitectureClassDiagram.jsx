import { motion } from 'framer-motion';
import './ArchitectureClassDiagram.css';
import EnJinnARC from '../../assets/EnJinnARC.svg';

export default function ArchitectureClassDiagram() {
  return (
    <section className="section sticky-section architecture-sticky-section">
      <div className="container sticky-container architecture-sticky-container">
        <motion.div
          className="sticky-sidebar architecture-sticky-sidebar"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Engine <span className="text-gradient">Architecture</span>
          </h2>
          <p className="section-subtitle">
            Entity-Component-System (ECS) inspired design
          </p>
        </motion.div>

        <div className="sticky-content architecture-sticky-content">
          <motion.div
            className="class-diagram-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              className="diagram-image"
              src={EnJinnARC}
              alt="EnJinn Architecture Diagram"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
