import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import GlassSurface from '../ui/GlassSurface';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Docs', path: '/docs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glassmorphism background toggle
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <GlassSurface
        className="navbar-glass"
        width="100%"
        height="70"
        borderRadius={16}
        borderWidth={0.08}
        blur={8}
        displace={1.25}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={60}
        opacity={0.88}
        backgroundOpacity={0.02}
        saturation={1.35}
        mixBlendMode="screen"
        style={{ 
          position: 'fixed', 
          zIndex: 1000
        }}
      >
        <motion.nav
          className={`navbar ${isScrolled ? 'scrolled' : ''}`}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'static', width: '100%', height: '100%' }}
        >
          <div className="navbar-container">
            <div className="navbar-brand-group">
              <Link to="/" className="navbar-brand">
                <img src="/onlylogo.svg?v=3" alt="EnJinn" className="navbar-brand-logo" />
              </Link>
              <div className="navbar-credit" aria-label="by @jayyvarmaa">
                <span className="navbar-credit-prefix">by</span>
                <a
                  href="https://instagram.com/jayyvarmaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-credit-link"
                >
                  @jayyvarmaa
                </a>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="desktop-nav">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive && link.path !== '/' && location.pathname !== '/' ? 'active' : (isActive && link.path === '/' && location.pathname === '/' ? 'active' : ''))}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="nav-actions">
                <a href="https://github.com/jayyvarmaa/enjinn" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </motion.nav>
      </GlassSurface>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed' }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  <NavLink to={link.path}>{link.name}</NavLink>
                </motion.li>
              ))}
              <motion.li
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: navLinks.length * 0.1 }}
                 style={{ position: 'relative' }}
              >
                 <a href="https://github.com/jayyvarmaa/enjinn" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <FaGithub size={20} /> GitHub
                 </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
