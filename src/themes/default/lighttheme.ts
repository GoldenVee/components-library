import tw from 'twin.macro';
import { ThemeProps } from '..';

export const getLightTheme = (): ThemeProps => {
  return {
    screens: {
      sMobile: '640px',
      mobile: '768px',
      tablet: '1024px',
      desktop: '1280px',
      lgDesktop: '1536px',
    },
    fontFamily: {
      serif: tw`font-serif`,
      sansSerif: tw`font-sans`,
      monospace: tw`font-mono`,
      primaryHeader: tw`font-helveticaNeue`,
      secondaryHeader: tw`font-georgia`,
      tertiaryHeader: tw`font-cambria`,
      quaternaryHeader: tw`font-roboto`,
      lead: tw`font-arial`,
      body: tw`font-georgia`,
      subtext: tw`font-roboto`,
      cambria: tw`font-cambria`,
      georgia: tw`font-georgia`,
      arial: tw`font-arial`,
      helveticaNeue: tw`font-helveticaNeue`,
      roboto: tw`font-roboto`,
      courierNew: tw`font-courierNew`,
      menlo: tw`font-menlo`,
      monoco: tw`font-monoco`,
    },
    colors: {
      // bg hierarchy
      bgLvl0: tw`bg-litlvl-50`,
      bgLvl0Accent: tw`bg-litlvl-100`,
      bgLvl1: tw`bg-litlvl-200`,
      bgLvl1Accent: tw`bg-litlvl-300`,
      bgLvl2: tw`bg-litlvl-400`,
      bgLvl2Accent: tw`bg-litlvl-500`,
      bgLvl3: tw`bg-litlvl-600`,
      bgLvl3Accent: tw`bg-litlvl-700`,

      divider: tw`divide-litlvl-800`,

      // behaves like a palette
      primary: tw`bg-indigo-600 text-white hover:bg-indigo-500`,
      secondary: tw`bg-teal-400 text-gray-950 hover:bg-teal-500`,
      tertiary: tw`bg-indigo-200 text-indigo-900 hover:bg-indigo-300`,
      quaternary: tw`bg-teal-300 text-gray-800 hover:bg-teal-400`,
      gradient: tw`bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-rose-400 hover:to-indigo-600 text-white`,
      transparent: tw`bg-transparent text-black hover:text-indigo-800`,

      // utility colors
      warning: tw`bg-warningLit hover:bg-warningDrk `,
      destroy: tw`bg-destroyLit text-white hover:bg-destroyDrk`,
      confirm: tw`bg-confirmLit text-emerald-950 hover:bg-confirmDrk`,
      disabled: tw`disabled:opacity-75`,

      // Text colors
      contrast: tw`text-slate-950`,
      base: tw`text-slate-900`,
      subtle: tw`text-slate-700`,
      nonessential: tw`text-slate-500`,
      interactive: tw`text-blue-600`,
    },
    border: {
      noBorder: tw`border-0`,
      small: tw`ring-inset ring-2 ring-slate-700/[.36] focus:ring-2 focus:ring-slate-300/[.56]`,
      medium: tw`ring-inset ring-4 ring-slate-700/[.36] focus:ring-2 focus:ring-slate-300/[.56]`,
    },
    borderRadius: {
      none: tw`rounded-none`,
      small: tw`rounded`,
      medium: tw`rounded-md`,
      large: tw`rounded-lg`,
      round: tw`rounded-full`,
    },
    boxShadow: {
      none: tw`shadow-none shadow-indigo-300`,
      small: tw`shadow-md shadow-indigo-300`,
      large: tw`shadow-lg shadow-indigo-300`,
      inset: tw`shadow-inner shadow-indigo-300`,
    },
  };
};
