import tw from 'twin.macro';
import { ThemeProps } from '..';

export const getDarkTheme = (): ThemeProps => {
  return {
    screens: {
      sMobile: '640px',
      mobile: '768px',
      tablet: '1024px',
      desktop: '1280px',
      lgDesktop: '1536px',
    },
    colors: {
      // bg hierarchy
      bgLvl0: tw`bg-darklvl-800`,
      bgLvl0Accent: tw`bg-darklvl-700`,
      bgLvl1: tw`bg-darklvl-600`,
      bgLvl1Accent: tw`bg-darklvl-500`,
      bgLvl2: tw`bg-darklvl-400`,
      bgLvl2Accent: tw`bg-darklvl-300`,
      bgLvl3: tw`bg-darklvl-200`,
      bgLvl3Accent: tw`bg-darklvl-100`,

      divider: tw`divide-darklvl-50`,

      // utility colors
      warning: tw`bg-warningDrk hover:bg-warningLit`,
      destroy: tw`bg-destroyDrk text-white hover:bg-destroyLit`,
      confirm: tw`bg-confirmDrk hover:bg-confirmLit`,
      disabled: tw`disabled:opacity-75`,

      // behaves like a palette
      primary: tw`bg-indigo-600 text-white hover:bg-indigo-700`,
      secondary: tw`bg-teal-500 text-gray-950 hover:bg-teal-600`,
      tertiary: tw`bg-indigo-300 text-indigo-900 hover:bg-indigo-400`,
      quaternary: tw`bg-teal-400 text-gray-800 hover:bg-teal-500`,
      transparent: tw`bg-transparent text-white hover:text-indigo-200`,
      gradient: tw`bg-gradient-to-r from-indigo-500 to-indigo-800 hover:from-rose-500 hover:to-indigo-700 text-white`,
    },
    border: {
      noBorder: tw`border-0`,
      small: tw`ring-inset ring-2 ring-slate-500/[.48] focus:ring-2 focus:ring-slate-300/[.56]`,
      medium: tw`ring-inset ring-4 ring-slate-500/[.48] focus:ring-2 focus:ring-slate-300/[.56]`,
    },
    borderRadius: {
      none: tw`rounded-none`,
      small: tw`rounded`,
      medium: tw`rounded-md`,
      large: tw`rounded-lg`,
      round: tw`rounded-full`,
    },
    boxShadow: {
      none: tw`shadow-none shadow-indigo-800`,
      small: tw`shadow-md shadow-indigo-800`,
      large: tw`shadow-lg shadow-indigo-800`,
      inset: tw`shadow-inner shadow-indigo-800`,
    },
  };
};
