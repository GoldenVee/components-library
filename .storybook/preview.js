import '../tailwind.css';
import { ThemeProvider } from 'styled-components';
import { themes } from '../src/themes';
import styled from 'styled-components';
import tw from 'twin.macro';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  minHeight: '200px',
  maxHeight: '1000px',
  margin: '0px',
  padding: '8px',
  borderRadius: '12px',
  backgroundColor: theme === 'dark' ? '#101417' : '#f8fafc',
}));

const withTheme = (Story, context) => {
  const { parameters, globals } = context;
  const theme = parameters.theme || globals.theme;
  const selectedTheme = theme === 'dark' ? themes.dark : themes.light;
  console.log(selectedTheme);
  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeBlock theme={theme}>
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
      dynamicTitle: true,
      icon: 'circle',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [withTheme];
