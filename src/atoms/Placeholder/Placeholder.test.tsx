import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Placeholder.stories';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

const ThemeWrapped = (Story: React.ReactElement) => {
  return (
    <ThemeProvider theme={themes['light'] || themes['dark']}>
      {Story}
    </ThemeProvider>
  );
};

describe('Skeleton', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default />));
    expect(container).toMatchSnapshot();
  });
});
