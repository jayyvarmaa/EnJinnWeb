import { motion as Motion } from 'framer-motion';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import Dither from '../ui/Dither';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-dither-bg">
        <Dither
          waveColor={[1, 0.5490196078431373, 0]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.9}
          colorNum={6}
          pixelSize={2}
          waveAmplitude={0.07}
          waveFrequency={4.9}
          waveSpeed={0.03}
        />
      </div>

      <div className="hero-overlay">
        <Motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src="/LOGO%20with%20text.svg?v=3"
              alt="EnJinn"
              className="hero-title-logo"
            />
          </Motion.h1>
          
          <Motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Modular C++17 Game Engine
          </Motion.h2>
          
          <Motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            See the engine. Control the engine. Build the game.
          </Motion.p>
          
          <Motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a 
              href="https://github.com/jayyvarmaa/enjinn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <FaGithub /> View on GitHub
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaChevronDown size={20} />
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
