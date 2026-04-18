import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiCmake, 
  SiOpengl 
} from 'react-icons/si';
import { FaCube, FaTools, FaBox, FaCubes } from 'react-icons/fa';
import './TechStack.css';

const techs = [
  { name: 'C++17', icon: <SiCplusplus />, url: 'https://en.cppreference.com/w/cpp/17' },
  { name: 'CMake', icon: <SiCmake />, url: 'https://cmake.org/' },
  { name: 'vcpkg', icon: <FaBox />, url: 'https://vcpkg.io/' },
  { name: 'OpenGL', icon: <SiOpengl />, url: 'https://www.opengl.org/' },
  { name: 'GLFW', icon: <FaTools />, url: 'https://www.glfw.org/' },
  { name: 'Dear ImGui', icon: <FaTools />, url: 'https://github.com/ocornut/imgui' },
  { name: 'GLM', icon: <FaCubes />, url: 'https://github.com/g-truc/glm' },
  { name: 'Box2D', icon: <FaCube />, url: 'https://box2d.org/' },
];

export default function TechStack() {
  return (
    <section className="section techstack-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Built on <span className="text-gradient">Solid Foundations</span></h2>
          <p className="section-subtitle">A modern, cross-platform C++ stack.</p>
        </motion.div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <motion.a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${tech.name} website`}
              className="glass-card tech-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                delay: index * 0.1, 
                duration: 0.5,
                y: {
                  repeat: Infinity,
                  duration: 3 + (index % 3),
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
