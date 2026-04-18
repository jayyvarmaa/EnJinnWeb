import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import LightRays from '../ui/LightRays';
import './DitherCTA.css';

export default function DitherCTA() {
  return (
    <section className="dither-cta-section">
      <div className="dither-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={0.3}
          lightSpread={1.75}
          rayLength={0.9}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.2}
          distortion={0.05}
          pulsating
          fadeDistance={1.5}
          saturation={0}
          className="cta-light-rays"
        />
      </div>
      <div className="container cta-content-wrapper">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to <span className="text-gradient">Build</span>?</h2>
          <p>Get the core repository. Modify the pipeline. Ship your game.</p>
          
          <div className="cta-actions">
             <a href="https://github.com/jayyvarmaa/enjinn" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaGithub /> View on GitHub
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
