import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './ActivityIndicator.stories';
import { ThemeWrapped } from '../../util/util';

describe('ActivityIndicator', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default loading={true} />));
    expect(container).toMatchSnapshot();
  });
});
