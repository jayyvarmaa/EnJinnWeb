import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CoreCapabilities.css';

const capabilities = [
  {
    title: 'Runtime & Architecture',
    description: 'Container-based plugin model, deterministic frame pipeline, and DLL hot reloading built from the ground up for iteration speed.',
    code: `// Hot-reloadable gameplay module entry
extern "C" __declspec(dllexport) void EnJinn_LoadModule(
    enjinn::Engine* engine) 
{
    engine->GetContainerManager()
          ->RegisterApplication<MyGameApp>();
          
    ENJINN_INFO("Gameplay module loaded successfully.");
}`,
    language: 'cpp'
  },
  {
    title: 'Scene & Gameplay',
    description: 'A performant node-component scene graph architecture with clean transform propagation, explicit memory arenas, and seamless serialization.',
    code: `// Node and Component API
auto* rootNode = scene->GetRootNode();
auto* playerNode = rootNode->CreateChild("Player");

// Attach components
auto* transform = playerNode->AddComponent<TransformComponent>();
transform->SetPosition(glm::vec3(0.0f, 5.0f, 0.0f));

auto* mesh = playerNode->AddComponent<MeshComponent>();
mesh->LoadModel("assets/models/character.obj");`,
    language: 'cpp'
  },
  {
    title: 'Rendering & Tooling',
    description: 'Direct OpenGL rendering with shader compilation diagnostics, uniform caching, and a fully-integrated Dear ImGui editor suite including hierarchy, inspector, and profiler.',
    code: `#version 450 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;

uniform mat4 uMenuProjection;
uniform mat4 uModel;

out vec3 vNormal;

void main() {
    vNormal = mat3(transpose(inverse(uModel))) * aNormal;
    gl_Position = uMenuProjection * uModel * vec4(aPos, 1.0);
}`,
    language: 'glsl'
  }
];

export default function CoreCapabilities() {
  return (
    <section className="section core-capabilities-section">
      <div className="container">
        {capabilities.map((cap, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`capability-row ${isEven ? '' : 'reverse'}`}>
              <motion.div 
                className="capability-text"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>{cap.title}</h2>
                <p>{cap.description}</p>
              </motion.div>

              <motion.div 
                className="capability-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="code-window glass-card">
                  <div className="window-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <SyntaxHighlighter 
                    language={cap.language} 
                    style={atomDark}
                    customStyle={{
                      background: 'transparent',
                      padding: '1.5rem',
                      margin: 0,
                      fontSize: '14px',
                      borderRadius: '0 0 var(--radius-lg) var(--radius-lg)'
                    }}
                  >
                    {cap.code}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
