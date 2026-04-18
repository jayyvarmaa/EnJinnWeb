export const siteData = {
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Docs', path: '/docs' },
    { name: 'FAQ', path: '#faq' },
  ],
  faq: [
    { question: 'Is EnJinn completely free?', answer: 'Yes! The core engine is released under the MIT license, meaning you can use it for commercial projects without paying royalties.' },
    { question: 'What platforms are supported?', answer: 'EnJinn currently supports Windows (MSVC) and Linux (GCC/Clang) via an automated vcpkg + CMake toolchain.' },
    { question: 'Does it support 3D physics?', answer: 'Currently, EnJinn integrates Box2D for 2D physics. 3D physics integrations via PhysX or Jolt are on the roadmap.' }
  ]
};
