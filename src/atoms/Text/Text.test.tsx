import React from 'react';
import { Default } from './Text.stories';
import { render } from '@testing-library/react';

import tw from 'twin.macro';
import { ThemeWrapped } from '../../util/util';

describe('Text Button Snapshot', () => {
  it('renders as expected', () => {
    const { container } = render(
      ThemeWrapped(
        <Default
          family="menlo"
          stylize="italic"
          size="2xl"
          align="right"
          weight="bold"
          indent="md"
        >
          Text it out
        </Default>,
      ),
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Text component', () => {
  it('renders correctly with color = "subtle", with size = "xl", with align = "left", and with children = "Example Text 1"', () => {
    const text = 'Example Text 1';
    const { getByText } = render(
      ThemeWrapped(
        <Default color="subtle" size="xl" align="left" family="menlo">
          {text}
        </Default>,
      ),
    );
    const defaultElement = getByText(text);
    expect(defaultElement).toBeInTheDocument();
    expect(defaultElement).toHaveStyle({
      fontSize: 'xl',
      color: tw`text-slate-700` || tw`text-slate-300`,
    });
  });

  it('renders correctly with color = "#119c59", with size = "xl", with fontWeight = "semibold", with stylize = "italic", and with children = "Example Text 2"', () => {
    const text = 'Example Text 2';
    const { getByText } = render(
      ThemeWrapped(
        <Default color="#119c59" size="xl" weight="semibold" stylize="italic">
          {text}
        </Default>,
      ),
    );
    const element = getByText(text);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      color: '#119c59',
      fontSize: '1.25rem',
      fontWeight: '600',
      fontStyle: 'italic',
    });
  });

  it('renders correctly with color = "##119c59", with overflow = "truncate", with role = "blockquote", and with children = "Example Text 2"', () => {
    const text = 'Example Text 2';
    const { getByText } = render(
      ThemeWrapped(
        <Default
          color="##119c59"
          overflow="truncate"
          role="blockquote"
          stylize="italic"
        >
          {text}
        </Default>,
      ),
    );
    const element = getByText(text);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '400',
      fontStyle: 'italic',
      color: 'base',
    });
  });
});
