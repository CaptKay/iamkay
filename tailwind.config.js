import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#f4f5ff',
          100: '#e4e6ff',
          200: '#c4c7ff',
          300: '#9ca2ff',
          400: '#6e73ff',
          500: '#4b4dff',
          600: '#3b3acd',
          700: '#3233a6',
          800: '#2c2d85',
          900: '#28286b'
        },
        base: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        }
      },
      boxShadow: {
        card: '0 20px 60px -25px rgba(79, 70, 229, 0.45)',
        glow: '0 0 50px -12px rgba(110, 115, 255, 0.7)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(110,115,255,0.15), rgba(79,70,229,0.35))',
        'card-glass': 'linear-gradient(130deg, rgba(255,255,255,0.92), rgba(244,244,255,0.68))'
      }
    }
  },
  plugins: []
} satisfies Config;
