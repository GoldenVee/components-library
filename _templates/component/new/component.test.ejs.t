---
to: &to <%= h.getBasePath() %><%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.test.tsx
# Lint only the generated file
sh: yarn lint:fix <%= h.getBasePath() %><%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.test.tsx
---
import React from 'react'
import { render } from '@testing-library/react'
import { Default } from './<%= name %>.stories'
import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes/index';

describe('<%= name %>', () => {
  it('renders as expected', () => {
    const { container } = render(
      <ThemeProvider theme={themes['light'] || themes['dark']}>
        <Default name="test" />
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
