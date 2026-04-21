import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaGlobe, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-hero-row">
          <div className="footer-brand-display">
            <img className="footer-brand-logo" src="/LOGO%20with%20text.svg?v=2" alt="EnJinn" />
            <p className="footer-brand-subtitle">
              Modular C++17 Game Engine. See the engine. Control the engine. Build the game.
            </p>
            <div className="social-links">
              <a href="https://github.com/jayyvarmaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{marginRight: 18}}>
                <FaGithub size={36} />
              </a>
              <a href="https://www.linkedin.com/in/jayyvarmaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{marginRight: 18}}>
                <FaLinkedinIn size={36} />
              </a>
              <a href="https://jayvarma.site/" target="_blank" rel="noopener noreferrer" aria-label="Website" style={{marginRight: 18}}>
                <FaGlobe size={36} />
              </a>
              <a href="mailto:jaymayurvarma@gmail.com" aria-label="Email">
                <FaEnvelope size={36} />
              </a>
            </div>
          </div>

          <div className="footer-links-row">
            <div className="footer-links-group">
              <h4>Project</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/jayyvarmaa/enjinn/issues" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
                <li><a href="https://github.com/jayyvarmaa/enjinn/pulls" target="_blank" rel="noopener noreferrer">Pull Requests</a></li>
                <li><a href="https://github.com/jayyvarmaa/enjinn/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jay Varma. Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
