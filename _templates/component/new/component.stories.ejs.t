---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.stories.tsx
# Lint only the generated file
sh: yarn lint:fix <%= h.getBasePath() %><%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.stories.tsx
---
import React from 'react';
import { Meta, Story } from '@storybook/react';
import {<%= name %>, <%=name%>Props } from './<%= name %>';

const meta: Meta = {
  title: '<%= h.getTypePath(locals.type) %>/<%= name %>',
  component: <%= name %>,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<<%=name%>Props> = args => <<%= name %> {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
