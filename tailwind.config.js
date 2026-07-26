/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2f5',
          100: '#d6dae3',
          200: '#adb3c7',
          300: '#848dab',
          400: '#5b678f',
          500: '#0F172A',
          600: '#0c1222',
          700: '#090e1a',
          800: '#060911',
          900: '#030509',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563EB',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a5f',
        },
        purple: {
          500: '#7C3AED',
          600: '#6d28d9',
          700: '#5b21b6',
        },
        cyan: {
          400: '#06B6D4',
          500: '#0891b2',
          600: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)',
        'ai-glow': 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

