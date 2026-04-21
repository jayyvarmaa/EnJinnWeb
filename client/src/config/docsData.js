export const docsCategoryOrder = [
  'Reference',
  'GettingStarted',
  'Foundations',
  'Architecture',
  'MemoryManagement',
  'ECSPipeline',
  'Rendering',
  'RenderingCompendium',
  'ComponentLibrary',
  'Audio',
  'Animation',
  'AIandNavigation',
  'Editor',
      content: `
export const docsData = [
  {
    slug: 'reference/architecture-manual-index',
    title: 'Architecture Manual Index',
    category: 'Reference',
    order: 0,
    lastUpdated: '2026-04-19T04:08:54.182Z',
    content: `
# Architecture Manual Index

*Last Updated: 19 April 2026*

The Architecture Manual is the definitive guide to the structural boundaries of EnJinn. It defines how modular subsystems—ranging from the high-level scene graph to the low-level rendering abstractions—interact and maintain binary stability.

---
### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **Visual Blueprints** | Defines shader programs and default uniform parameters for surface categories. | \`GraphicsCore\` | \`materialTemplate.h\` |
| **Material Variation** | Data-driven texture mapping (Diffuse, Normal, ARM) for unique surfaces. | \`GraphicsCore\` | \`materialInstance.h\` |
| **Layering Engine** | Multi-material blending using vertex colors or texture weights. | \`GraphicsCore\` | \`materialLayeringEngine.h\` |
| **Dependency Graph** | Automated orchestration of cross-system initialization and shutdown. | \`ArchitectureLead\` | \`moduleDependencyMap.h\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Template Parsing**: Load \`materialTemplate.h\` to establish the uniform buffer layouts.
2. **Instance Instantiation**: Create \`materialInstance.cpp\` objects to bind unique textures (Rusted Iron, Chrome).
3. **Layering Calculation**: \`materialLayeringEngine.h\` calculates composite normals in a single high-performance shader pass.
4. **Uniform Handshake**: Hand-off processed uniforms to the Render Graph for drawing.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **GPU State Changes** | Minimize shader swaps using instancing. | \`GPUView\`, \`RenderDoc\` |
| **VRAM Footprint** | Optimize texture compression (BC7) for large maps. | \`MemoryTracker\` |
| **Draw Call Batching** | Group objects by \`materialTemplate\` ID. | \`DrawCallAnalyzer\` |

---

### 4️⃣ Review Prompts

| Prompt | What to Look For |
|--------|------------------|
| **Are materials correctly layered?** | Check for flickering or incorrect vertex-color weights in \`LayeringEngine\`. |
| **Is the material template valid?** | Verify shader IDs match across the \`GraphicsDevice\`. |

---

### 5️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// GraphicsCore
class IMaterialTemplate {
public:
    virtual void BindShader(ShaderId id) = 0;
    virtual void SetDefaultUniforms(const UniformBuffer& buffer) = 0;
};

class IMaterialInstance {
public:
    virtual void SetTexture(TextureSlot slot, TextureHandle handle) = 0;
    virtual void PushToGPU() = 0;
};
\`\`\`

---

### 6️⃣ How to Extend Safely

1. Define a new \`Visual Blueprint\` in a \`.template\` JSON file.
2. Implement custom shader logic in \`pluggins/custom_shaders\`.
3. Register the template in the \`MaterialSystem\` during boot.

#### TL;DR

- Reference = **Structural blueprints and material hierarchies**.
- High-fidelity **Material Templates** drive thousands of instances.
- **Layering Engine** handles complex weathering with minimal overhead.
    `
  },
  {
    slug: 'getting-started/installation',
    title: 'Installation Guide',
    category: 'Getting Started',
    lastUpdated: '2026-04-19T04:08:54.192Z',
    content: `
# Installation Guide

*Last Updated: 19 April 2026*

This guide covers the prerequisites and environment setup required to develop on the EnJinn platform. It focuses on the instrumentation tools and telemetry sinks necessary for valid technical verification.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **Environment Sync** | Synchronization of \`vcpkg\` dependencies and CMake toolchains. | \`PlatformLayer\` | \`vcpkg.json\` |
| **Telemetry Recorder** | A circular buffer acting as a "Flight Recorder" for engine events. | \`DiagnosticsCore\` | \`telemetryDataSinkBuffer.h\` |
| **Visual Instrumentation** | Real-time interpretation of raw telemetry data for ImGui timelines. | \`ToolingLead\` | \`telemetryVisualizationHook.cpp\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Dependency Boot**: Run \`vcpkg install\` to link thirdparty binaries (OpenGL, GLFW, Box2D).
2. **Build Configuration**: Generate project files with \`cmake -B build\`.
3. **Telemetry Bind**: Initialize the \`TelemetrySinkBuffer\` to begin recording engine boot timings.
4. **Tool Handshake**: Attach the Editor \`Metrics Window\` to the visualization hooks.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **Build Time** | Parallelize compilation across all CPU cores. | \`Ninja\`, \`ccache\` |
| **Instrumentation Lag** | Ensure telemetry writes use atomic pointers to prevent stalls. | \`ProfilerCPU\` |
| **Dependency Conflicts** | Validate \`vcpkg\` versioning against engine requirements. | \`VcpkgManager\` |

---

### 5️⃣ Stable Contracts (Quick Reference)

\`\`\`bash
# Standard Build Sequence
cmake -B build -S . -DCMAKE_TOOLCHAIN_FILE=vcpkg/scripts/buildsystems/vcpkg.cmake
cmake --build build --config Release --parallel
\`\`\`

---

### 6️⃣ How to Extend Safely

1. Fork the EnJinn repository and set up a local workspace.
2. Verify the \`TelemetrySinkBuffer\` is capturing data by opening the Editor metrics overlay.
3. Add custom diagnostic labs to the \`DiagnosticCategoryRegistry\`.

#### TL;DR

- Installation = **Toolchain setup and Telemetry activation**.
- Uses **vcpkg** for all third-party lifecycle management.
- **Flight Recorder** (Telemetry) must be active for any valid performance contribution.
    `
  },
  {
    slug: 'getting-started/building',
    title: 'Building from Source',
    category: 'Getting Started',
    lastUpdated: '2026-04-19T04:08:54.199Z',
    content: `
# Building from Source

*Last Updated: 19 April 2026*

A detailed technical deep-dive into the EnJinn build pipeline, asynchronous resource loading, and memory safety protocols for compiled assets.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **Async Loading** | Abstract foundation for non-blocking content-loading. | \`ResourceCore\` | \`resourceLoaderBase.h\` |
| **Task Orchestration** | Coordination of parallel worker threads for binary decompression. | \`ResourceCore\` | \`resourceTaskOrchestrator.h\` |
| **Reference Counting** | Automatic VRAM deallocation for unused assets. | \`ResourceCore\` | \`resourceReferenceCounter.h\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Request Queueing**: Gameplay threads request assets (Characters, Rocks) with assigned priority.
2. **Decompression Pass**: \`resourceTaskOrchestrator\` deblocks binary streams (OGG, PNG) in the background.
3. **GPU Hand-off**: Safe transfer of loaded data to the Graphics Device context.
4. **Automatic Safety**: \`ReferenceCounter\` triggers deallocation when use-counts hit zero.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **Non-Blocking IO** | High-priority assets must not stall the main thread. | \`ThreadProfiler\` |
| **Binary Decompression** | Optimize OGG/PNG decode times across thread-pools. | \`MetricsWindow\` |
| **VRAM Leak Prevention** | Track orphaned assets with zero references. | \`MemoryTracker\` |

---

### 5️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// ResourceCore
class IResourceLoader {
public:
    virtual void RequestAsset(const string& path, Priority prio) = 0;
    virtual bool IsLoaded(AssetHandle handle) const = 0;
};

class IReferenceCounter {
public:
    virtual void Increment(AssetHandle handle) = 0;
    virtual void Decrement(AssetHandle handle) = 0; // Triggers cleanup if 0
};
\`\`\`

---

### 6️⃣ How to Extend Safely

1. Implement a new \`ResourceLoader\` for custom file formats (e.g., custom \`.mesh\`).
2. Bind the loader to the \`ResourceTaskOrchestrator\` in \`SystemRegistry\`.
3. Use the \`ReferenceCounter\` to wrap all world-node asset pointers.

#### TL;DR

- Building = **Asynchronous content delivery pipeline**.
- **Task Orchestrator** prevents main-thread stalls during heavy loads.
- **Reference Counting** ensures zero VRAM bloat automatically.
    `
  },
  {
    slug: 'foundations/overview',
    title: 'Foundations Overview',
    category: 'Foundations',
    order: 3,
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Foundations Overview

*Last Updated: 19 April 2026*

The Foundations layer defines the **core contracts, runtime expectations, and health‑monitoring guidelines** for every subsystem in EnJinn. It is the “ground floor” on which all higher‑level features are built.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **Memory Management** | Centralised custom allocators, arena pools, and leak-tracking. | \`MemoryCore\` | \`IMemoryAllocator\`, \`MemoryTracker\` |
| **Entity System (ECS)** | Sparse-set storage and archetype-based iteration. | \`ECSCore\` | \`IComponent\`, \`EntityHandle\` |
| **Task Scheduling** | Fixed-step update loop and job-system thread-pool. | \`Scheduler\` | \`ITask\`, \`JobQueue\` |
| **Config & Serial** | Versioned JSON/YAML schema and hot-reload support. | \`ConfigManager\` | \`IConfigProvider\`, \`Serializer\` |
| **Logging & Diag** | Thread-safe logging and runtime metrics. | \`LogSystem\` | \`ILogger\`, \`DiagnosticOverlay\` |
| **Platform Layer** | Windowing, input, and GPU device abstraction. | \`PlatformLayer\` | \`IWindow\`, \`IGraphicsDevice\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Engine Boot**: \`PlatformLayer\` creates context; \`ConfigManager\` parses settings.
2. **Initialization**: Subsystems boot in order: Memory -> ECS -> Scheduler -> Graphics.
3. **Main Loop**: Fixed-step updates for Physics/Logic; Render graph builds frame.
4. **Shutdown**: Reverse order release with leak-detection validation.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **Frame Budget** | Keep Update <= 8ms, Render <= 12ms. | \`FrameProfiler\`, \`GPUView\` |
| **Memory Footprint** | Bounded arena usage <= 75% RAM. | \`MemoryTracker\` |
| **Deterministic Tick** | Constant delta-time; check for drift. | \`TickValidator\` |

---

### 5️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// MemoryCore
class IMemoryAllocator {
public:
    virtual void* Allocate(size_t bytes, size_t alignment) = 0;
    virtual void  Deallocate(void* ptr) = 0;
};

// ECSCore
struct IComponent { virtual ~IComponent() = default; };
using EntityHandle = uint32_t;
\`\`\`

---

### 6️⃣ How to Extend Safely

1. Implement engine interfaces via versioned plugins.
2. Register plugins in the \`SystemRegistry\` during boot.
3. Verify binary compatibility using \`DiagnosticLab\` automated tests.

#### TL;DR

- Foundations = **The immutable ground floor of the engine**.
- All interactions happen through **stable, versioned interfaces**.
- Respect **allocation rules** and monitor **core metrics**.
    `
  },
  {
    slug: 'foundations/deterministic-memory-model',
    title: 'Deterministic Memory Model',
    category: 'Foundations',
    order: 4,
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Deterministic Memory Model

*Last Updated: 19 April 2026*

Memory fragmentation is the silent killer of long-running real-time applications. EnJinn employs a "static-first" memory strategy to guarantee stability and cache locality.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **System Budgets** | Hard-coded memory limits per subsystem (e.g. 512MB for Rendering). | \`MemoryCore\` | \`SystemBudgets.h\` |
| **Arena Allocation** | Contiguous blocks carved out at startup; zero runtime heap growth. | \`MemoryCore\` | \`ArenaAllocator.h\` |
| **Leak Detection** | Shutdown-time validation of zero outstanding allocations per arena. | \`MemoryCore\` | \`LeakDetector.h\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Read engine_config.json**: Establish the \`SystemBudgets\` array.
2. **Create General Arena**: Reserve the master memory block from the OS.
3. **Sub-Divide**: Each subsystem (Physics, Audio, etc.) receives its dedicated Arena.
4. **Runtime Usage**: Subsystems use Bump, Stack, or Free-List strategies within their block.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **Cache Locality** | Ensure contiguous arrays for hot ECS data. | \`PerfView\`, \`CacheAnalyzer\` |
| **High-Water Mark** | Monitor peak usage to prevent OOM within arenas. | \`MemoryTracker UI\` |
| **Allocation Latency** | Prefer O(1) Bump/Stack allocators for frame data. | \`MetricsOverlay\` |

---

### 5️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// Deterministic Allocation Pattern
enjinn::ArenaAllocator renderArena(512 * 1024 * 1024);
auto* ctx = renderArena.allocate<RenderContext>(); // No OS call
\`\`\`

#### TL;DR

- Memory = **Static-first, budget-enforced arenas**.
- **No runtime heap growth** after initial boot.
- **HeapSnapshots** provide 1:1 visibility of every byte.
    `
  },
  {
    slug: 'foundations/executive-summary',
    title: 'Executive Summary and Philosophy',
    category: 'Foundations',
    order: 5,
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Executive Summary & Philosophy

*Last Updated: 19 April 2026*

EnJinn is a high-performance, data-oriented multimedia framework designed for architectural purity and developer iteration speed.

---

### 1️⃣ Core Tenets

| Pillar | Core Idea | Practical Impact |
|:---|:---|:---|
| **Determinism** | All time-critical paths run on a **fixed-step loop**. | Predictable physics & sim updates. |
| **Data-Oriented** | Tight, cache-aligned structures (SoA) over OOP (AoS). | Maximized CPU-memory bandwidth. |
| **Hot Reload** | Physical separation of Host (OS) and Gameplay (Logic). | <250ms code iteration cycles. |
| **Observability** | Centralized diagnostic labs and telemetry sinks. | Performance regressions found instantly. |

---

### 2️⃣ Design Philosophy

- **Bare-Metal Power**: Provide C++ developers with total control over memory and threads.
- **Architectural Purity**: Minimize "engine bloat" by enforcing pure interfaces.
- **Iteration Speed**: Treat "Time to C++ Change" as a primary performance metric.

#### TL;DR

- EnJinn = **Deterministic, Data-Centric, and Hot-Reloadable**.
- Engineered for **Raw Power** without the legacy burden of OOP bloat.
    `
  },
  {
    slug: 'architecture/host-gameplay-duality',
    title: 'Host and Gameplay Duality',
    category: 'Architecture',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Host and Gameplay Duality

*Last Updated: 19 April 2026*

The radical split between the "Immutable Host" and "Hot-swap Gameplay" binaries is the technical heart of EnJinn.

---

### 1️⃣ Subsystem Boundaries

| Binary | Responsibility | Lifespan |
|:---|:---|:---|
| **Host Application** | Windowing, Input, Memory Arenas, DLL loading. | Persistent session. |
| **Gameplay DLL** | ECS Systems, AI logic, Character controllers. | Transient (reloadable). |

---

### 2️⃣ Interaction & Handover

1. **Serialization Phase**: Before unloading, Gameplay snapshots state to \`IStateBridge\`.
2. **Library Swap**: Host unloads \`gameplay_v1.dll\` and loads \`gameplay_v2.dll\`.
3. **Re-Injection Phase**: Host passes \`IStateBridge\` handle back to the new binary.
4. **Execution Resume**: Simulation continues with updated logic but preserved state.

---

### 3️⃣ Performance Metrics

| Metric | Target | Detection Tool |
|:---|:---|:---|
| **Reload Latency** | < 250ms | \`ReloadMonitor\` |
| **State Continuity** | 100% handle retention | \`MemoryTracker\` |

#### TL;DR

- Architecture = **Immutable Host + Swappable Logic**.
- **State Handover** ensures sim-continuity during live-edits.
    `
  },
  {
    slug: 'architecture/frame-lifecycle',
    title: 'Runtime Frame Lifecycle',
    category: 'Architecture',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Runtime Frame Lifecycle

*Last Updated: 19 April 2026*

EnJinn uses a strictly ordered frame lifecycle to ensure determinism and prevent race conditions in its multi-threaded update pipeline.

---

### 1️⃣ Frame Execution Sequence

| Phase | Responsibility | Key Hook |
|:---|:---|:---|
| **1. Input Polling** | OS message processing and device state updates. | \`IPlatformLayer::PollEvents()\` |
| **2. Sim Update** | ECS system execution and fixed-step physics integration. | \`IGameplayContract::Update()\` |
| **3. Render Build** | Scene traversal, spatial culling, and command recording. | \`IRenderGraphBuilder::Build()\` |
| **4. Present** | GPU submission and swap-chain presentation. | \`IGraphicsDevice::Present()\` |

---

### 2️⃣ Important Data Flow Rules

- **Fixed-Step Update**: Simulation logic always receives a constant \`delta_time\` (e.g. 1/60s).
- **Temporal Decoupling**: Rendering may run faster than Physics via interpolation.
- **Command Latency**: Render commands recorded in Frame N are executed in Frame N+1 (Double Buffering).

#### TL;DR

- Frame = **Input -> Update -> Render -> Present**.
- **Determinism** is guarded by a fixed-step simulation loop.
    `
  },
  {
    slug: 'architecture/module-dependency-map',
    title: 'Module Dependency Map',
    category: 'Architecture',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Module Dependency Map

*Last Updated: 19 April 2026*

EnJinn's modularity is enforced by a strict directed acyclic graph (DAG) of system dependencies.

---

### 1️⃣ Master Dependency Matrix

| Module | Dependent On | Role |
|:---|:---|:---|
| **RenderGraph** | **GraphicsDevice** | Orchestrates draw-call order and VRAM reuse. |
| **ECS** | **MemoryCore** | Manages block-aligned component storage. |
| **Physics** | **TaskScheduler** | Offloads narrow-phase tests to worker threads. |
| **Gameplay** | **ECS, Physics, Audio** | Consumes core services for simulation. |

---

### 2️⃣ Architectural Guardrails

1. **No Circular Refs**: Build system errors if Module A depends on B while B depends on A.
2. **Interface Isolation**: Modules only communicate through Versioned Headers (\`.h\`).
3. **Lazy Initialization**: Subsystems only allocate memory when first requested.

#### TL;DR

- Dependency = **Strictly hierarchical system interactions**.
- **RenderGraph** is the master architect of the frame.
- **Interface Isolation** prevents cross-binary fragility.
    `
  },
  {
    slug: 'architecture/hot-reload-contract',
    title: 'Hot Reload Contract',
    category: 'Architecture',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Hot Reload Contract

*Last Updated: 19 April 2026*

The Hot Reload Contract defines how the engine preserves simulation state across binary logic swaps.

---

### 1️⃣ Handover Protocol

| Stage | Action | Verification |
|:---|:---|:---|
| **Freeze** | Stop SIM update and pause worker threads. | \`Scheduler::Pause()\` |
| **Serialize** | Snapshot world state into the \`IStateBridge\`. | \`IStateBridge::Push()\` |
| **Swap** | Unload old DLL, load new binary, re-bind hooks. | \`Host::Reload()\` |
| **Thaw** | Re-inject state and resume simulation. | \`IStateBridge::Pop()\` |

---

### 2️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// ArchitectureCore
struct IGameplayContract {
    virtual void OnLoad(void* state) = 0;
    virtual void Update(float dt) = 0;
    virtual void* OnUnload() = 0; // Return state for next version
};
\`\`\`

#### TL;DR

- Hot Reload = **Zero-shutdown logic updates**.
- **IStateBridge** is the courier for persistence between versions.
- **Hand-over verification** prevents sim-drift after swaps.
    `
  },
  {
    slug: 'memory/enjinnstd-container-philosophy',
    title: 'enjinnSTD Container Philosophy',
    category: 'Memory Management',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# enjinnSTD Container Philosophy

*Last Updated: 19 April 2026*

Traditional containers (\`std::vector\`) trigger unpredictable heap allocations. \`enjinnSTD\` provides fixed-capacity, no-throw alternatives for real-time safety.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Primary Owner | Key Interfaces |
|----------------|-------------|---------------|----------------|
| **Static Storage** | Inline or stack-based data allocation. | \`MemoryCore\` | \`StaticVector.h\`, \`StaticString.h\` |
| **Deterministic Access** | O(1) complexity for insertion/removal without resizing. | \`MemoryCore\` | \`enjinn_std.h\` |
| **No-Throw Safety** | Zero exception overhead; strictly deterministic error codes. | \`MemoryCore\` | \`Result<T, E>\` |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Compile-Time Sizing**: Capacities must be specified at declaration (e.g. \`StaticVector<Entity, 1024>\`).
2. **Buffer Alignment**: All containers are aligned to 16/64-byte boundaries for SIMD/Cache efficiency.
3. **Handle Access**: Prefer indices or handles over raw pointers for cross-reloading safety.

#### TL;DR

- Containers = **Fixed-capacity, no-heap, no-throw**.
- **StaticVector** is the workhorse of the ECS pipeline.
- Prevents **frame-time spikes** caused by hidden \`malloc\` calls.
    `
  },
  {
    slug: 'ecs/core-concepts',
    title: 'ECS Core Concepts',
    category: 'ECSPipeline',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# ECS Core Concepts

*Last Updated: 19 April 2026*

EnJinn's Entity-Component-System (ECS) moves away from inheritance in favor of pure data orientation.

---

### 1️⃣ Subsystem Boundaries

| Unit | Responsibility | Storage Pattern |
|:---|:---|:---|
| **Entity** | A unique ID (handle) acting as a container. | \`SparseSet\` |
| **Component** | Plain-old-data (POD) struct representing state. | \`ArchetypeChunk\` |
| **System** | High-performance logic processing component streams. | \`SystemRegistry\` |

---

### 2️⃣ Data Flow

1. **Signature Matching**: Systems query entities that possess a specific set of components (e.g. \`Transform\` + \`Mesh\`).
2. **Archetype Caching**: Entities with identical signatures are grouped into contiguous memory blocks.
3. **Parallel Dispatch**: Systems process chunks in parallel across worker threads.

#### TL;DR

- ECS = **Composition over Inheritance**.
- **Archetype Chunks** maximize CPU cache hit rates.
- **Systems** are the only place where simulation logic lives.
    `
  },
  {
    slug: 'rendering/pbr-and-ibl',
    title: 'PBR and Image-Based Lighting',
    category: 'Rendering',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# PBR and Image-Based Lighting

*Last Updated: 19 April 2026*

EnJinn's rendering pipeline is built on a Physically Based Rendering (PBR) foundation, ensuring that materials react realistically to lighting under any environment.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Feature | Responsibility | Data Type |
|:---|:---|:---|
| **Micro-facet BRDF** | Cook-Torrance model for specular highlights. | GGX Distribution |
| **Material Textures** | Albedo, Normal, and ARM (AO, Roughness, Metalness) maps. | 56-bit G-Buffer |
| **Image-Based Lighting** | Diffuse and Specular irradiance from environment maps. | Pre-Filtered Cubemaps |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **G-Buffer Pass**: Opaque objects write material properties to multi-target textures.
2. **Irradiance Lookup**: Shaders sample the pre-filtered cubemaps for global illumination.
3. **Lighting Accumulation**: Combine PBR calculations with local light contributions.
4. **Energy Conservation**: Ensure reflected light never exceeds incident light.

---

### 3️⃣ Performance & Debugging Priorities

| Priority | Focus Area | Recommended Tools |
|----------|------------|-------------------|
| **VRAM Bandwidth** | Minimize G-Buffer bit-depth while maintaining precision. | \`MemoryTracker\` |
| **Shader Complexity** | Optimize high-frequency ALU operations in the BRDF. | \`RenderDoc\`, \`Nsight\` |
| **Texture Aliasing** | Ensure proper mip-map generation for ARM maps. | \`VisualInspector\` |

#### TL;DR

- Rendering = **Physically accurate material-light interaction**.
- **ARM maps** consolidate AO, Roughness, and Metalness into a single VRAM fetch.
- **GGX** distribution provides industry-standard specular highlights.
    `
  },
  {
    slug: 'rendering/shadowing-systems',
    title: 'Shadowing Systems: CSM and Atlas',
    category: 'Rendering',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Shadowing Systems: CSM and Atlas

*Last Updated: 19 April 2026*

Real-time shadowing in EnJinn utilizes cascaded maps and dynamic atlas allocation to balance visual fidelity with GPU performance.

---

### 1️⃣ Core Components

| Component | Responsibility | Strategy |
|:---|:---|:---|
| **CSM Splitting** | Dividing the camera frustum into depth-zones. | Logarithmic partition |
| **Shadow Atlas** | Dynamic bin-packing of local light shadow maps. | Page-based VRAM reuse |
| **PCF Filtering** | Softening shadow edges via multi-tap sampling. | Variable quality tiers |

---

### 2️⃣ Important Data Flow Rules

- **frustum-fitting**: Shadow matrices are recalculated every frame to encapsulate visible objects.
- **cascade-blending**: Dithered transitions prevent hard lines between depth cascades.
- **bias-configuration**: Slope-scaled bias prevents "shadow acne" and "peter-panning."

#### TL;DR

- Shadows = **Frustum-fitted cascades and local light atlases**.
- **CSM** solves perspective aliasing for large outdoor scenes.
- **Shadow Atlas** minimizes context-switches for multi-light environments.
    `
  },
  {
    slug: 'rendering/atmospheric-and-volumetrics',
    title: 'Atmospheric and Volumetric Effects',
    category: 'Rendering',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Atmospheric and Volumetric Effects

*Last Updated: 19 April 2026*

Atmospheric effects provide the scale and 'air' that ground EnJinn's visuals in reality.

---

### 1️⃣ Subsystem Boundaries

| Feature | Responsibility | Implementation |
|:---|:---|:---|
| **Sky Scattering** | Physically based Rayleigh and Mie models. | Procedural sky shader |
| **Volumetric Fog** | Frozen density grid for light scattering. | Froxel-based storage |
| **Light Shafts** | Rays of light breaking through gaps (God Rays). | Ray-marched occlusion |

---

### 2️⃣ Performance Metrics

| Metric | Target | Detection Tool |
|:---|:---|:---|
| **Froxel Update** | < 1.0ms | \`FrameProfiler\` |
| **Scatter Pass** | < 0.5ms | \`GPUView\` |

#### TL;DR

- Atmosphere = **Scattering models and volumetric froxels**.
- **God Rays** are generated via high-density ray-marching.
- **Rayleigh/Mie** models enable dynamic time-of-day cycles.
    `
  },
  {
    slug: 'rendering/postfx-cinematic-stack',
    title: 'Cinematic Post-FX Stack',
    category: 'Rendering',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Cinematic Post-FX Stack

*Last Updated: 19 April 2026*

The final image quality is determined by a cinematic post-processing chain that handles HDR conversion and anti-aliasing.

---

### 1️⃣ Sequential Passes

| Order | Pass | Responsibility |
|:---|:---|:---|
| 1 | **Bloom** | Gaussian blur light bleed for HDR highlights. |
| 2 | **SSAO** | Ambient occlusion for contact shadows. |
| 3 | **TAA** | Temporal anti-aliasing to eliminate jaggies. |
| 4 | **Tonemapping**| ACES/Filmic mapping of HDR to LDR. |

---

### 2️⃣ Stable Contracts (Quick Reference)

\`\`\`cpp
// GraphicsCore
class IPostFXChain {
public:
    virtual void ApplyBloom(float intensity, float threshold) = 0;
    virtual void SetTonemapperTier(TonemapTier tier) = 0;
};
\`\`\`

#### TL;DR

- Post-FX = **Cinematic image filtering and HDR mapping**.
- **TAA** provides the cleanest edges via temporal history.
- **ACES** tonemapper is the foundation of the EnJinn "look."
    `
  },
  {
    slug: 'audio/advanced-dsp-and-routing',
    title: 'Advanced DSP and Routing',
    category: 'Audio',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Advanced DSP and Routing

*Last Updated: 19 April 2026*

The EnJinn audio engine is a comprehensive Digital Signal Processing (DSP) environment for real-time sound synthesis and spatialization.

---

### 1️⃣ Core DSP Modules

| Module | Responsibility | Algorithm |
|:---|:---|:---|
| **3-Band EQ** | Frequency shaping (Low/Mid/High). | Butterworth Filter |
| **Dyn Compressor** | Dynamic range peak clamping. | Peaking / Shelving |
| **Granular Synth** | Procedural ambient texture generation. | Micro-grain synthesis |

---

### 2️⃣ Important Data Flow Rules

- **buffer-filling**: Audio buffers are filled asynchronously to prevent main-thread stalls.
- **spatialization**: 3D panning calculation uses Equal-Power models.
- **occlusion**: Low-pass filters are applied based on ray-cast results.

#### TL;DR

- Audio = **Multi-threaded 3D spatialization and DSP**.
- **High-Pass/Low-Pass** filters provide environmental depth.
- **EQ/Compression** ensures a professional master mix.
    `
  },
  {
    slug: 'animation/skeletal-pipeline',
    title: 'Skeletal Animation Pipeline',
    category: 'Animation',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Skeletal Animation Pipeline

*Last Updated: 19 April 2026*

The EnJinn animation system handles complex skeletal deformations and procedural movement, bridging raw vertex data with dynamic character behavior.

---

### 1️⃣ Pipeline Stages

| Phase | Responsibility | Implementation |
|:---|:---|:---|
| **Pose Sampling** | Extraction of bone transforms from keyframes. | Quaternion SLERP |
| **Animation Blender**| Mixing multiple skeletal poses (e.g. Walk/Run). | LERP Weights |
| **State Machine** | Transition logic and cross-fade management. | State Graph |
| **Vertex Skinning** | GPU-side deformation of the mesh vertices. | Compute Shader |

---

### 2️⃣ Important Data Flow Rules

- **temporal-interpolation**: Keyframes are interpolated based on the simulation tick to ensure smooth 60fps motion.
- **root-motion**: Optional extraction of character displacement from the animation data.
- **additive-layers**: Support for partial-body overrides (e.g. aiming while walking).

#### TL;DR

- Animation = **Skeletal hierarchies and weighted pose blending**.
- **Vertex Skinning** is offloaded to the GPU for maximum performance.
- **Cross-fading** ensures seamless transitions between logic states.
    `
  },
  {
    slug: 'ai/behavior-tree-runtime',
    title: 'Behavior Tree Runtime',
    category: 'AIandNavigation',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Behavior Tree Runtime

*Last Updated: 19 April 2026*

EnJinn's decision-making logic is driven by a high-performance Behavior Tree (BT) implementation, emphasizing modularity and predictability.

---

### 1️⃣ Node Taxonomy

| Node Type | Responsibility | Strategy |
|:---|:---|:---|
| **Selector** | Priority-based goal switching. | Stops on first success. |
| **Sequence** | Multi-step task execution. | Stops on first failure. |
| **Leaf (Action)** | Performing specific tasks (Move, Attack). | Returns Success/Failure/Running. |
| **Decorator** | Modifying child results (Wait, Invert). | Logic wrapper. |

---

### 2️⃣ Data & State Management

- **Blackboard**: A shared data-bag for agent memory (e.g. \`TargetEntity\`, \`HomeLocation\`).
- **Node Cursor**: Tracks the active execution point across frames.
- **Tick-Budgeting**: BT updates are spread across multiple frames for large agent counts.

#### TL;DR

- AI = **Hierarchical task selection and shared memory**.
- **Selectors** drive high-level goals; **Sequences** drive procedures.
- **Blackboards** isolation ensures agent-specific intelligence.
    `
  },
  {
    slug: 'ai/perception-and-sensors',
    title: 'Perception and Sensor Model',
    category: 'AIandNavigation',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Perception and Sensor Model

*Last Updated: 19 April 2026*

The Perception system provides AI agents with world awareness through simulated sensory modalities.

---

### 1️⃣ Sensory Modalities

| Sensor | Responsibility | Implementation |
|:---|:---|:---|
| **Vision Cone** | LOS checks and field-of-view detection. | Raycast Probes |
| **Auditory Radius** | Hearing events and sound attenuation. | Distance Thresholds |
| **Tactile Buffer** | Proximity detection and collision response. | Physics Overlaps |

---

### 2️⃣ Detection Pipeline

1. **Stimulus Event**: An event (Sound/Visual) is broadcast to the agent registry.
2. **Filter Pass**: Agents check if the event falls within their sensor range.
3. **LOS Verification**: For visual events, a raycast confirms visibility.
4. **Meter Update**: The "Detection Meter" increases; on 100%, state switches to "Combat."

#### TL;DR

- Perception = **LOS-validated sensory input**.
- **Vision Cones** use spatial partitioning for fast rejection.
- **Detection Meters** provide the "Suspense" phase in stealth gameplay.
    `
  },
  {
    slug: 'editor/docking-and-workspace',
    title: 'Editor Docking and Workspace Systems',
    category: 'Editor',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Editor Docking and Workspace Systems

*Last Updated: 19 April 2026*

The EnJinn Editor is built on a modular docking architecture, providing a professional-grade environment for rapid iteration.

---

### 1️⃣ Core Responsibilities & Subsystem Boundaries

| Responsibility | Description | Implementation |
|:---|:---|:---|
| **Docking Host** | Orchestration of snapping and tabbed panel layouts. | ImGui DockSpace |
| **Theme Management** | Data-driven aesthetic (Deep Grays & Honeydew). | \`editorThemeConfig.h\` |
| **Layout Serialization** | Persistence of workspace arrangements across sessions. | \`editorLayoutPersistence.h\` |

---

### 2️⃣ Interaction & Handover

- **OS Message Hooking**: The Editor intercepts raw OS inputs (Mouse/Keyboard) before they reach the game world.
- **Refresh Sync**: The UI refresh rate is decoupled from the simulation tick to prevent input lag.
- **Dirty Flagging**: Layout changes are only written to disk when a panel is resized or moved.

#### TL;DR

- Editor = **ImGui-based docking and premium design language**.
- **DockSpace** enables complex, multi-window arrangements.
- **Theme Engine** ensures high legibility and professional feel.
    `
  },
  {
    slug: 'diagnostics/laboratory-framework',
    title: 'Diagnostic Laboratory Framework',
    category: 'Diagnostics',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Diagnostic Laboratory Framework

*Last Updated: 19 April 2026*

The Laboratory Framework is EnJinn's primary tool for isolated technical verification and stress-testing.

---

### 1️⃣ Subsystem Boundaries

| Component | Responsibility | Role |
|:---|:---|:---|
| **Diagnostic Lab** | A contained environment for testing specific features. | Feature isolation |
| **Test Runner** | Automated orchestrator for validation sequences. | Regression gating |
| **Metrics Overlay** | Real-time visualization of frame budgets and memory. | Live profiling |

---

### 2️⃣ Important Data Flow & Lifecycle Rules

1. **Lab Init**: Allocates minimal memory from the \`DiagnosticArena\`.
2. **Execution**: The \`TestRunner\` cycles through a series of inputs/scenarios.
3. **Capture**: \`TelemetrySinkBuffer\` records performance deltas and API calls.
4. **Validation**: Asserts check for sim-drift or memory leaks post-execution.

#### TL;DR

- Diagnostics = **Modular labs and automated test runners**.
- **Metrics Overlay** provides a frame-by-frame breakdown of engine health.
- **Isolated Verification** ensures engine changes don't cause silent regressions.
    `
  },
  {
    slug: 'build/cmake-and-dependencies',
    title: 'Build System and Dependencies',
    category: 'BuildandDependencies',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Build System and Dependencies

*Last Updated: 19 April 2026*

EnJinn utilizes a modern CMake-based build system integrated with \`vcpkg\` for high-performance dependency management.

---

### 1️⃣ Build Pipeline Stages

| Stage | Responsibility | ToolChain |
|:---|:---|:---|
| **Configure** | Dependency resolution and macro definition. | \`CMake\` |
| **Generation**| Project file creation (Ninja/VS). | \`Ninja\` |
| **Compile** | Parallel translation of C++ to machine code. | \`Clang / MSVC\` |
| **Pack** | Symbol stripping and release bundling. | \`CPack\` |

---

### 2️⃣ Dependency Philosophy

- **VCPKG Manifests**: Explicit versioning for all 3rd-party libs.
- **Modular Sub-Projects**: Each subsystem is a separate CMake target.
- **Pre-Compiled Headers**: Optimized build times for large codebases.

#### TL;DR

- Build = **CMake-driven modular orchestration**.
- **vcpkg** ensures binary compatibility across developer environments.
- **Ninja** provides the fastest possible incremental compile times.
    `
  },
  {
    slug: 'contributing/documentation-style-guide',
    title: 'Documentation Style Guide',
    category: 'Contributing',
    lastUpdated: '2026-04-19T12:00:00Z',
    content: `
# Documentation Style Guide

*Last Updated: 19 April 2026*

This guide establishes the high-fidelity standards required for adding or updating content in the EnJinn portal.

---

### 1️⃣ Layout Requirements

Every documentation page MUST include the following sections:
1. **Title and Meta**: H1 title and "Last Updated" timestamp.
2. **Core Responsibilities**: A table defining what the subsystem does.
3. **Important Data Flow**: A numbered or bulleted list of lifecycle rules.
4. **Metrics/Performance**: A table defining what to monitor and how.
5. **TL;DR**: A high-impact summary at the bottom.

---

### 2️⃣ Tone and Voice

- **Source-First**: Content must be derived from the C++ headers and implementation files.
- **Technical Rigor**: Use exact class names, interface names, and performance targets.
- **Architectural Clarity**: Focus on boundaries, contracts, and failure modes.

#### TL;DR

- Style = **High-fidelity, Technical, Table-Heavy**.
- Focus on **Contracts** and **Stability**.
    `
  }
];
