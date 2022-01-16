module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1E2833',
      white: '#FFFFFF',
      yellow: '#F8C525',
      blue: '#4E98D6'
    },
    fontFamily: {
      ivy: ['ivypresto-display', 'serif'],
      proxima: ['proxima-nova', 'sans-serif']
    },
    fontSize: {
      label: ['0.8125rem', '1.2em'],
      ctaNav: ['0.625rem', '1.2em'],
      ctaMob: ['0.875rem', '1.2em'],
      cta: ['1rem', '1.2em'],
      base: ['16px', '1.4em'],
      subtitle: ['1rem', '1.2em'],
      md: ['1.125rem', '1.2em'],
      headingMob: ['1.5rem', '1.2em'],
      heading: ['2.625rem', '1.2em'],
      titleMob: ['2.25rem', '1.4em'],
      titleh2: ['2.625rem', '1.2em'],
      titleh1: ['4.25rem', '1.4em']
    },
    letterSpacing: {
      tight: '0.02em',
      wide: '0.05em'
    },
    maxWidth: {
      sm: '424px',
      md: '456px',
      lg: '1240px'
    },
    extend: {},
  },
  plugins: [],
}
