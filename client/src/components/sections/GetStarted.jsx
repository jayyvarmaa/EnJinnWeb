import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './GetStarted.css';

const buildCommands = {
  windows: `cd EnJinn
cmake -B build -G "Visual Studio 17 2022" -DCMAKE_TOOLCHAIN_FILE=../vcpkg/scripts/buildsystems/vcpkg.cmake -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel 8
./build/Release/EnJinnCore.exe`,
  linux: `cd EnJinn
cmake -B build -DCMAKE_TOOLCHAIN_FILE=../vcpkg/scripts/buildsystems/vcpkg.cmake -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel 8
./build/EnJinnCore`
};

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      <button className="copy-btn" onClick={handleCopy} title="Copy to clipboard">
        {copied ? <FaCheck color="#FF8C00" /> : <FaCopy />}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function GetStarted() {
  const [platform, setPlatform] = useState('windows');

  return (
    <section className="section getstarted-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          <h2 className="section-title">Get <span className="text-gradient">Started</span></h2>
          <p className="section-subtitle">Clone and build the engine in minutes.</p>
        </motion.div>

        <div className="steps-container">
          {/* Step 1 */}
          <motion.div 
            className="glass-card step-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div className="step-number">01</div>
            <h3>Clone the Repository</h3>
            <p>Grab the latest source from GitHub. The repository includes vcpkg bootstrap scripts.</p>
            <CodeBlock code="git clone https://github.com/jayyvarmaa/enjinn" />
          </motion.div>
<br></br>
          {/* Step 2 */}
          <motion.div 
            className="glass-card step-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div className="step-number">02</div>
            <div className="step-header-with-tabs">
              <h3>Build the Engine</h3>
              <div className="platform-tabs">
                <button 
                  className={platform === 'windows' ? 'active' : ''} 
                  onClick={() => setPlatform('windows')}
                >
                  Windows
                </button>
                <button 
                  className={platform === 'linux' ? 'active' : ''} 
                  onClick={() => setPlatform('linux')}
                >
                  Linux / macOS
                </button>
              </div>
            </div>
            <p>Ensure you have CMake 3.20+ and a C++17 compatible compiler installed.</p>
            <CodeBlock code={buildCommands[platform]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
