import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './CTA.css';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div 
          className="cta-glass glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>Join the <span className="text-gradient">Community</span></h2>
            <p>
              EnJinn is an open-source project. Star the repository on GitHub or subscribe to the newsletter for major release updates.
            </p>
            
            <div className="cta-actions">
              <a 
                href="https://github.com/jayyvarmaa/enjinn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline github-cta"
              >
                <FaGithub size={20} /> Star on GitHub
              </a>
              
              <div className="newsletter-form-container">
                {subscribed ? (
                  <div className="success-message">
                    <FaEnvelope /> Thanks for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn-primary">Subscribe</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
