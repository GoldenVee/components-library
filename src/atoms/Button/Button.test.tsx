import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Button.stories';
import { ThemeWrapped } from '../../util/util';

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(ThemeWrapped(<Default name="test" />));
    expect(container).toMatchSnapshot();
  });
});
