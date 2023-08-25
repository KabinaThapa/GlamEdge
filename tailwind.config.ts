import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        babypowder:'#F9F7F3',
        Alabaster:'#DEE2D6',
        Platinum:'#E6E6E9',
        Antiflashwhite:'#F4F4F6',
        Paledogwood:'#EBCCC2',
        Jet:'#3E363F',
        Charcoal:'#474954',
        coolgray:'#9FA2B2',
        frenchgray:'#BFBDC1',
        khaki:'#C4AF9A',
        battleshipgray:'#798478',
        dimgray:'#736F72',
        wenge:'#615756',
        raisinblack:'#191923'


      }
    },
  },
  plugins: [],
}
export default config
