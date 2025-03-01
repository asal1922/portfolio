import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        laptop: '960px',
      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blur-background': 'linear-gradient(179.22deg, rgba(40, 54, 75, 0.3) -35.92%, rgba(7, 8, 45, 0.3) 23.38%)',
        'blue-gradient': 'linear-gradient(89.64deg, #64A2FF 0.31%, #C6DDFF 76.53%)',
        'dark-blue-gradient': 'linear-gradient(117.27deg, #243864 2.27%, #324E8B 34.27%, #4971CA 68.43%)',
        'html-gradient': 'linear-gradient(90deg, #1975FF 0%, #68A4FF 27.88%, #8B96FF 100%, rgba(139, 150, 255, 0) 100%)',
        'js-gradient': 'linear-gradient(90.02deg, #910369 0.02%, #F9015C 24.34%, #AC0060 100%, rgba(255, 139, 243, 0) 99.05%)',
        'react-gradient': 'linear-gradient(90.02deg, #917203 0.02%, #F9D001 100%, #ACA200 36.47%, rgba(255, 243, 139, 0) 99%)',
        'tailwind-gradient': 'linear-gradient(90.01deg, #037791 11.42%, #01BFF9 33.26%, #00A5AC 99.84%, rgba(139, 220, 255, 0) 99.19%)',
        'reactfiber-gradient': 'linear-gradient(90.02deg, #910369 0.02%, #F9015C 20.92%, #AC0060 28.02%, rgba(255, 139, 243, 0) 73.08%)',
        'git-gradient': 'linear-gradient(90.02deg, #917203 0.02%, #F9D001 24.34%, #ACA200 90.47%, rgba(255, 243, 139, 0) 99.05%)',
        'next-gradient': 'linear-gradient(90.02deg, #19FF75 0.02%, #68FFA4 23.61%, #8BFFB9 100%, rgba(139, 255, 185, 0) 90.49%)',
        'light': 'linear-gradient(90deg, rgba(25, 117, 255, 0.1) 0%, rgba(104, 164, 255, 0.15) 27.88%, rgba(139, 150, 255, 0.1) 50.26%, rgba(139, 150, 255, 0) 97.45%)',
        'dark-blue': 'rgba(124, 158, 255, 0.08)',

      },


      colors: {

      }
    },
  },
  plugins: [],
}
export default config
