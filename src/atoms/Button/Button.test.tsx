import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Button.stories';

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(<Default name="test" />);
    expect(container).toMatchSnapshot();
  });
});
