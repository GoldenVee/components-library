import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Button.stories';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../themes/index';

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme || darkTheme}>
        <Default name="test" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
