import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      greenLight: '#2F9C01',
      greenBold: '#027A00',
      black0: 'rgba(96, 96, 96, 0.65)',
      black1: 'rgba(0, 0, 0, 0.65)',
      blackPrimary: '#000',
      black2: '#3A3A3A',
      black3: '#454545',
    },
    fontFamily: {
      svn400: ['svn400'],
      svn500: ['svn500'],
      svn600: ['svn600'],
      svn800: ['svn800'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
