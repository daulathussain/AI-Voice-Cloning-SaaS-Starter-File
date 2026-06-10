/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Alien/Cyberpunk palette
        brand: {
          50:  '#e8fff9',
          100: '#c0ffee',
          200: '#7dffdf',
          300: '#00ffe0',
          400: '#00e5c8',
          500: '#00c4aa',
          600: '#00a38e',
          700: '#007d6c',
          800: '#005a4e',
          900: '#003830',
        },
        cyber: {
          50:  '#f0fff4',
          100: '#b9ffd6',
          200: '#6bffb0',
          300: '#00ff88',
          400: '#00e87a',
          500: '#00c466',
          600: '#00a354',
          700: '#007d40',
          800: '#005a2d',
          900: '#003820',
        },
        alien: {
          bg:      '#020c10',
          surface: '#041820',
          card:    '#062030',
          border:  '#0d4a5a',
          glow:    '#00ffe0',
          green:   '#00ff88',
          purple:  '#b44dff',
          red:     '#ff3c6e',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Orbitron', 'Share Tech Mono', 'monospace'],
        mono: ['Share Tech Mono', 'Courier New', 'monospace'],
        body: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,255,224,0.4)' },
          '50%':      { boxShadow: '0 0 24px 6px rgba(0,255,224,0.15)' },
        },
        'scan-line': {
          '0%':   { top: '-10%' },
          '100%': { top: '110%' },
        },
        'border-flow': {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: 1 },
          '97%':            { opacity: 0.7 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        shimmer:          'shimmer 2s infinite',
        'fade-in':        'fade-in 0.5s ease-out',
        'pulse-glow':     'pulse-glow 2.5s infinite',
        'scan-line':      'scan-line 4s linear infinite',
        flicker:          'flicker 6s infinite',
      },
      boxShadow: {
        card:        '0 0 0 1px rgba(0,255,224,0.08), 0 2px 12px rgba(0,0,0,0.6)',
        'card-hover':'0 0 0 1px rgba(0,255,224,0.3), 0 0 24px rgba(0,255,224,0.1)',
        brand:       '0 0 20px rgba(0,255,224,0.4)',
        'brand-lg':  '0 0 40px rgba(0,255,224,0.35)',
        neon:        '0 0 8px rgba(0,255,224,0.8), 0 0 24px rgba(0,255,224,0.4)',
        'neon-green':'0 0 8px rgba(0,255,136,0.8), 0 0 24px rgba(0,255,136,0.4)',
        'neon-purple':'0 0 8px rgba(180,77,255,0.8), 0 0 24px rgba(180,77,255,0.4)',
      },
    },
  },
  plugins: [],
}
