import '../tailwind.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/themes';
import { DecoratorFn } from '@storybook/react';
import styled from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding: 1rem;
`;

const withTheme: DecoratorFn = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <ThemeBlock theme={storyTheme}>
        <Story />
      </ThemeBlock>
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle',
      items: ['light', 'dark'],
      title: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [withTheme];
