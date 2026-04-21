import React from 'react';

export default function About() {
  return (
    <div className="about-page" style={{
      maxWidth: 700,
      margin: '0 auto',
      padding: '3.5rem 1.5rem 2.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      color: '#f4f4f4'
    }}>
      <header style={{marginBottom: '1.5rem'}}>
        <br></br><br></br><br></br><br></br>
        <h1 style={{fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em'}}>About <span style={{color: '#ff8c00'}}>EnJinn</span></h1>
        <p style={{fontSize: '1.18rem', color: '#ccc', lineHeight: 1.7, margin: 0}}>
          <b>EnJinn</b> is a modular, open-source C++17 game engine focused on explicit memory control, performance iteration, and a modern cross-platform stack.<br/>
          Built for developers who want to see, control, and extend every layer of their engine.
        </p>
      </header>

      <section>
        <h2 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffd7a6'}}>Key Features</h2>
        <ul style={{fontSize: '1.08rem', lineHeight: 1.8, paddingLeft: '1.5rem', margin: 0, color: '#eee'}}>
          <li>Modular architecture for easy extension and customization</li>
          <li>Explicit memory management for performance-critical applications</li>
          <li>Modern C++17 codebase</li>
          <li>Cross-platform support</li>
          <li>Open-source and community-driven</li>
        </ul>
      </section>

      <section>
        <h2 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffd7a6'}}>Get Involved</h2>
        <p style={{fontSize: '1.08rem', color: '#ccc', lineHeight: 1.7}}>
          EnJinn is actively developed and welcomes contributions from the community.<br/>
          Check out the <a href="https://github.com/jayyvarmaa/enjinn" target="_blank" rel="noopener noreferrer" style={{color: '#ff8c00', fontWeight: 600}}>source code on GitHub</a> to get started, report issues, or suggest features.
        </p>
      </section>
      <br></br>
    </div>
  );
}
