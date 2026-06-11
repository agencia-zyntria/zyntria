/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: '#00D4FF',
          50: '#e0faff',
          100: '#b3f4ff',
          200: '#80edff',
          300: '#4de6ff',
          400: '#26e0ff',
          500: '#00D4FF',
          600: '#00a8cc',
          700: '#007d99',
          800: '#005166',
          900: '#002633',
        },
        navy: {
          950: '#060B18',
          900: '#0A0F1E',
          800: '#0D1B3E',
          700: '#1a2d5a',
          600: '#2a3f6f',
          500: '#3d5585',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -40%) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
