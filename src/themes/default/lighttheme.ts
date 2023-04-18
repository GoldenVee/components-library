import tw from 'twin.macro';
import { ThemeProps } from '..';

export const getLightTheme = (): ThemeProps => {
  return {
    colors: {
      background: tw`bg-slate-50`,
      secondaryBackground: tw`bg-slate-400`,

      // behaves like a palette
      primary: tw`bg-indigo-600 text-white hover:bg-indigo-500`,
      secondary: tw`bg-teal-400 text-gray-950 hover:bg-teal-500`,
      tertiary: tw`bg-indigo-200 text-indigo-900 hover:bg-indigo-300`,
      quaternary: tw`bg-teal-300 text-gray-800 hover:bg-teal-400`,
      transparent: tw`bg-transparent text-black hover:text-indigo-800`,
      gradient: tw`bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-rose-400 hover:to-indigo-600 text-white`,
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
