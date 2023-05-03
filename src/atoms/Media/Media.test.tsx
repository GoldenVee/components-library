import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Media.stories';
import { ThemeWrapped } from '../../util/util';

describe('Media', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default title="test" />));
    expect(container).toMatchSnapshot();
  });
});
