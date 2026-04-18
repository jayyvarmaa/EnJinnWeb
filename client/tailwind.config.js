/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191919',
        secondary: '#1F1F1F',
        tertiary: '#252525',
        elevated: '#2A2A2A',
        accent: {
          primary: '#FF8C00',
          secondary: '#FFA500',
          dark: '#E67E00',
          glow: 'rgba(255, 140, 0, 0.15)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E0E0',
          muted: '#A0A0A0',
        },
        status: {
          danger: '#FF4444',
          success: '#4CAF50',
          warning: '#FFA500',
        },
      },
      backgroundColor: {
        glass: 'rgba(31, 31, 31, 0.45)',
        card: 'rgba(31, 31, 31, 0.7)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 140, 0, 0.1)',
        accent: '0 0 20px rgba(255, 140, 0, 0.2)',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
        spring: '500ms',
      },
    },
  },
  plugins: [],
}
