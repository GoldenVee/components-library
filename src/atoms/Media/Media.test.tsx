import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Media.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

describe('Media', () => {
  it('renders as expected', () => {
    const { container } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Default title="test" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
