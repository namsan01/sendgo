module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': {'max': '1920px'},
      'xl': {'max': '1440px'},
      'base': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm' : {'max' : '425px' }
    }
  },
  plugins: []
}
