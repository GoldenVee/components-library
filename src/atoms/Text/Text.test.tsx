import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Text.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

describe('Text', () => {
  it('renders as expected', () => {
    const { container } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Default>Test</Default>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
