import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../themes';

export const ThemeWrapped = (Story: React.ReactElement): React.ReactElement => {
  return (
    <ThemeProvider theme={themes['light'] || themes['dark']}>
      {Story}
    </ThemeProvider>
  );
};
