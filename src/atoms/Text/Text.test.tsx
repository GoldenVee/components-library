import React from 'react';
import { render } from '@testing-library/react';
import { storiesOf } from '@storybook/react';
// import { Default } from './Text.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';
import { Text } from './Text';
import tw from 'twin.macro';

const stories = storiesOf('Text', module);

stories.add('Default', () => (
  <ThemeProvider theme={themes['light'] || themes['dark']}>
    <Text role="h4">Example Text 1</Text>
  </ThemeProvider>
));
stories.add('Custom Color', () => (
  <ThemeProvider theme={themes['light'] || themes['dark']}>
    <Text color="#119c59">Example Text 2</Text>
  </ThemeProvider>
));
stories.add('Custom Size', () => (
  <ThemeProvider theme={themes['light'] || themes['dark']}>
    <Text size="xl">Example Text 3</Text>
  </ThemeProvider>
));
stories.add('Custom All Caps', () => (
  <ThemeProvider theme={themes['light'] || themes['dark']}>
    <Text allCaps>Example Text 4</Text>
  </ThemeProvider>
));

describe('Text component', () => {
  it('renders correctly with children = "Example Text 1"', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Text role="h4">Example Text 1</Text>
      </ThemeProvider>,
    );
    const defaultElement = getByText('Example Text 1');
    expect(defaultElement).toBeInTheDocument();
  });

  it('renders correctly with color = "#119c59" and children = "Example Text 2"', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Text color="#119c59">Example Text 2</Text>
      </ThemeProvider>,
    );
    const textElement = getByText('Example Text 2');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle(`color: #119c59;`);
  });

  it('renders correctly with size = "xl" and children = "Example Text 3"', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Text size="xl">Example Text 3</Text>
      </ThemeProvider>,
    );
    const textElement = getByText('Example Text 3');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle(tw`text-xl leading-7`);
  });

  it('renders correctly with allCaps = true and children = "Example Text 4"', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Text allCaps>Example Text 4</Text>
      </ThemeProvider>,
    );
    const textElement = getByText('Example Text 4');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('text-transform: uppercase');
  });
});
