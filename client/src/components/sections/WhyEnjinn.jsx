import { motion } from 'framer-motion';
import { FaEye, FaMicrochip, FaBolt } from 'react-icons/fa';
import './WhyEnjinn.css';

const features = [
  {
    icon: <FaEye />,
    title: 'See the Internals',
    description: 'EnJinn makes engine internals visible and controllable, instead of abstracting away key systems behind monolithic tooling.',
  },
  {
    icon: <FaMicrochip />,
    title: 'Memory You Own',
    description: 'Free-list allocator with 8-byte alignment, guard-value corruption detection, per-container memory isolation.',
  },
  {
    icon: <FaBolt />,
    title: 'Hot Reload',
    description: 'Gameplay modules compile as DLLs. Change code, rebuild, and watch it hot-reload without restarting the editor.',
  }
];

export default function WhyEnjinn() {
  return (
    <section className="section why-enjinn-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          <h2 className="section-title">Why <span className="text-gradient">EnJinn?</span></h2>
          <p className="section-subtitle">A fundamental approach to game technology.</p>
        </motion.div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              style={{ position: 'relative' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
