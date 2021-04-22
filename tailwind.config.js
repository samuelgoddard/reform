module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        'spin-slow': 'spin 24s linear infinite',
      },
      borderWidth: {
        '10': '10px',
      },
      colors: {
        'black': '#1F1F1F',
        'offblack': '#333333',
        'offwhite': '#E5E1DF',
        'offwhitelight' : '#EBE9E8'
      },
      fontFamily: {
        'sans': ['Freigeist', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.55rem',
        '5xl': '3.25rem',
        '6xl': '4.25rem',
        '7xl': '8rem',
      },
      opacity: {
        '5': '.05',
        '20': '.20',
      },
      maxHeight: {
        '65screen': '65vh',
        '75screen': '75vh',
        '80screen': '80vh',
        '90screen': '90vh',
      },
      minHeight: {
        '90screen': '90vh',
        contentMask: '32px',
      },
      lineHeight: {
        'negative': '0.9',
      },
      letterSpacing: {
        tighter: '-.04em',
        tiny: '-.01em',
      },
      spacing: {
        '2px': '2px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '25vh': '25vh'
      },
    }
  },
  corePlugins: {
    container: false
  }
}