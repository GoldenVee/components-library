import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Button.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Default name="test" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
