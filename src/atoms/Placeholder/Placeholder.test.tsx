import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Placeholder.stories';
import { ThemeWrapped } from '../../util/util';

describe('Placeholder', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default />));
    expect(container).toMatchSnapshot();
  });
});
