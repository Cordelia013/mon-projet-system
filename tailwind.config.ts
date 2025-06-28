import type { Config } from 'tailwindcss'

// Import modular configurations
const colors = require('./src/config/tailwind/colors')
const fonts = require('./src/config/tailwind/fonts')
const screens = require('./src/config/tailwind/screens')
const spacing = require('./src/config/tailwind/spacing')
const grid = require('./src/config/tailwind/grid')
const animations = require('./src/config/tailwind/animations')
const typography = require('./src/config/tailwind/typography')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors
      colors,
      
      // Typography
      fontFamily: fonts,
      fontSize: typography.fontSize,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      fontWeight: typography.fontWeight,
      
      // Layout
      spacing,
      screens,
      
      // Grid system
      gridTemplateColumns: grid.columns,
      gap: grid.gap,
      margin: grid.margin,
      
      // Animations
      animation: animations.animation,
      keyframes: animations.keyframes,
      transitionDuration: animations.transitionDuration,
      transitionTimingFunction: animations.transitionTimingFunction,
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: grid.container,
      },
    },
  },
  plugins: [
    // Plugin pour les utilitaires de grid personnalisés
    function({ addUtilities, theme }: any) {
      const gridUtilities = {
        '.grid-debug': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundImage: `
              linear-gradient(to right, ${theme('colors.grid.line')} 1px, transparent 1px),
              linear-gradient(to bottom, ${theme('colors.grid.line')} 1px, transparent 1px)
            `,
            backgroundSize: '1rem 1rem',
            pointerEvents: 'none',
            zIndex: '10',
          },
        },
        '.container-debug': {
          outline: `2px dashed ${theme('colors.primary.500')}`,
          outlineOffset: '-2px',
        },
      }
      
      addUtilities(gridUtilities)
    },
  ],
}

export default config