/**
 * EnJinn Design System
 * Brand colors and design tokens for consistent UI across the application
 */

export const designSystem = {
  colors: {
    // Primary Brand Color - Engine Signature
    primary: '#FF8C00',
    
    // Backgrounds
    background: {
      dark: '#191919',      // Deep charcoal - primary background
      secondary: '#1F1F1F', // Slightly lighter charcoal - cards/sections
      tertiary: '#252525',  // Even lighter for nested elements
    },
    
    // Text Colors
    text: {
      primary: '#FFFFFF',      // White on dark backgrounds
      secondary: '#E0E0E0',    // Light gray for secondary text
      muted: '#A0A0A0',        // Muted gray for tertiary text
    },
    
    // Accent Colors
    accent: {
      orange: '#FF8C00',       // Primary action buttons, highlights
      orangeLight: '#FFA500',  // Hover states
      orangeDark: '#E67E00',   // Pressed states
    },
    
    // UI Elements
    border: '#2A2A2A',  // Subtle dark border
    
    // Status Colors
    status: {
      danger: '#FF4444',   // Red for errors
      success: '#4CAF50',  // Green for success
      warning: '#FFA500',  // Orange for warnings
      info: '#FFA500',     // Orange for info messages
    },
  },
  
  // Typography
  typography: {
    fontFamily: {
      display: '"Outfit", sans-serif',      // Headings & display text
      body: '"Inter", sans-serif',          // Body text & UI
      mono: '"JetBrains Mono", monospace',  // Code blocks & technical text
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.6)',
    glow: '0 0 20px rgba(255, 140, 0, 0.3)',
    glowStrong: '0 0 30px rgba(255, 140, 0, 0.5)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
  
  // Z-index Scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
};

/**
 * Utility function to get CSS variable declaration
 * Use this to programmatically generate CSS custom properties
 */
export const getCSSVariables = () => {
  const { colors, typography, spacing, borderRadius, shadows, transitions, zIndex } = designSystem;
  
  return {
    // Colors
    '--color-primary': colors.primary,
    '--color-bg-dark': colors.background.dark,
    '--color-bg-secondary': colors.background.secondary,
    '--color-bg-tertiary': colors.background.tertiary,
    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-text-muted': colors.text.muted,
    '--color-accent-orange': colors.accent.orange,
    '--color-accent-orange-light': colors.accent.orangeLight,
    '--color-accent-orange-dark': colors.accent.orangeDark,
    '--color-border': colors.border,
    '--color-status-danger': colors.status.danger,
    '--color-status-success': colors.status.success,
    '--color-status-warning': colors.status.warning,
    '--color-status-info': colors.status.info,
    
    // Typography
    '--font-display': typography.fontFamily.display,
    '--font-body': typography.fontFamily.body,
    '--font-mono': typography.fontFamily.mono,
    
    // Shadows
    '--shadow-sm': shadows.sm,
    '--shadow-md': shadows.md,
    '--shadow-lg': shadows.lg,
    '--shadow-xl': shadows.xl,
    '--shadow-glow': shadows.glow,
    '--shadow-glow-strong': shadows.glowStrong,
  };
};
