/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
      'w':'28%',
      'w7':'75rem',
      'w47':'52rem',
      'w81':'81%',
      'w51':'51%',
      'w19':'19rem',
      'wid9/10':'90%',
      'wk':'-webkit-fill-available',
      'w75':'75.3%',
      'w77':'77%',
      'w72':'72%',
      'w65':'65rem',
      'w77r':'77rem',
          },
          height:{
'hp':'382px',
'h8':'22.666667%',
'h85':'85rem',
'h73':'73rem'
          },
          fontFamily: {
            'poppins': ['Poppins'],
          },
          flexGrow: {
            '3': '3'
          },
          borderWidth:{
'border-l-5':'5px'
          },
          margin:{
      'margin5':'5%',
      'margin25':'25%',
      'margin18':'18.7rem',
      'margin5.6':'5.6rem',
      'margin10':'10%',
      'margin65':'65%',
      'margin50':'50%',
      'margin2':'2%',
      'margin40':'40%',
      'margin28':'28%',
      'margin31':'33%',
      'margin75':'75%',
      'margin60':'60%',
      'margin65':'51.7rem',
      'margin38':'22rem',
          },
          scale:{
            '98':'.98'
                        }
        },
    screens: {
      'max-sm': '@media not all and(min-width: 640px){ ... }',
      // => @media (min-width: 640px) { ... }

      'max-md': '@media not all and(min-width: 768px){ ... }',
      // => @media (min-width: 768px) { ... }

      'max-lg': '@media not all and(min-width: 1024px){ ... }',
      // => @media (min-width: 1024px) { ... }

      'max-xl': '@media not all and(min-width: 1280px){ ... }',
      // => @media (min-width: 1280px) { ... }

      'max-2xl': '@media not all and(min-width: 1536px){ ... }',
      // => @media (min-width: 1536px) { ... }
    
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  
    
  },
  plugins: [],
}