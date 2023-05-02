import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './ActivityIndicator.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

const ThemeWrapped = (Story: React.ReactElement) => {
  return (
    <ThemeProvider theme={themes['light'] || themes['dark']}>
      {Story}
    </ThemeProvider>
  );
};

describe('ActivityIndicator', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default loading={true} />));
    expect(container).toMatchSnapshot();
  });
});
