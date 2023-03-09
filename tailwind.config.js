/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html.js}'],
  theme: {
    extend: {
     colors:{
      papayawhip:{
        light:'#fef4e4',
        default:'#ffefd5',
        dark:'#fee5bc',
      }
     },
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%':{Transform:'scaleY(0)'},
          '80%':{Transform:'scaleY(1.2)'},
          '100%':{Transform:'scaleY(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
