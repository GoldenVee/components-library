import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ActivityIndicator } from './ActivityIndicator';
import { ActivityIndicatorProps } from './ActivityIndicator.props';
import styled from 'styled-components';
import { Text } from '../Text/Text';

const meta: Meta = {
  title: 'atoms/ActivityIndicator',
  component: ActivityIndicator,
  argTypes: {
    indicator: {
      description:
        'Select indicator type. Certain style elements can only be used on certain indicators (ex: skew accepts size but not width and height)',
      table: { defaultValue: { summary: 'bar' } },
      control: {
        type: 'radio',
        options: [
          'bar',
          'bounce',
          'clip',
          'dot',
          'fade',
          'propagate',
          'pulse',
          'rotate',
          'scale',
          'skew',
          'square',
        ],
      },
    },
    loading: {
      description:
        'If the indicator is loading, its visible. Otherwise its hidden.',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    speedMultiplier: {
      description:
        'Determines the speed of the indicator. If prefers-reduced-motion is turned on, this defaults to 0.1 speed.',
      table: { defaultValue: { summary: '1' } },
      control: {
        type: 'number',
      },
    },
    color: {
      description:
        'Choose a custom color for the indicator. Can also accept one of these values: (maroon, red, orange, yellow, olive, green, purple, white, fuchsia, lime, teal, aqua, blue, navy, black, gray, silver) Defaults to interractive text color.',
      table: { defaultValue: { summary: 'teal' } },
      control: {
        type: 'color',
      },
    },
    override: {
      description:
        'Allows for styling override via CSSProperties. Check the notion docs for proper formatting.',
      control: {
        type: 'object',
      },
    },
    size: {
      description:
        'Determines the size of bounce, clip, dot, propagate, pulse, rotate, skew, and square indicators. Some indicators require a specific width and height.',
      table: { defaultValue: { summary: 'depends on indicator' } },
      control: {
        type: 'number',
      },
    },
    width: {
      description:
        'Determines the width of bar, fade, and scale indicators. Some indicators require only a specified size.',
      table: { defaultValue: { summary: 'depends on indicator' } },
      control: {
        type: 'number',
      },
    },
    height: {
      description:
        'Determines the height of bar, fade, and scale indicators. Some indicators require only a specified size.',
      table: { defaultValue: { summary: 'depends on indicator' } },
      control: {
        type: 'number',
      },
    },
    radius: {
      description:
        'For fade and scale indicators, you can customize the radius.',
      table: { defaultValue: { summary: 'depends on indicator' } },
      control: {
        type: 'number',
      },
    },
    margin: {
      description:
        'For fade, pulse, rotate, and scale indicators, you can customize the margin around the indicator.',
      table: { defaultValue: { summary: 'depends on indicator' } },
      control: {
        type: 'number',
      },
    },
    ariaLive: {
      description:
        'For accessibility for screen readers, choose between polite for loading of smaller less crucial elements of the page or assertive for major changes like page loading.',
      table: { defaultValue: { summary: 'polite' } },
      control: {
        type: 'radio',
        options: ['polite', 'assertive', 'off'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 25%;
  width: 96%;
  margin: 24px;
  max-width: 1000px;
`;

const ExampleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 25%;
  width: 96%;
  margin: 32px 0px;
  max-width: 1000px;
`;

const Template: Story<ActivityIndicatorProps> = (args) => (
  <ExampleContainer>
    <ActivityIndicator {...args} />
  </ExampleContainer>
);
const AllOptionsTemplate: Story<ActivityIndicatorProps> = (args) => (
  <ExampleContainer>
    <ExampleRow>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Bounce
        </Text>
        <ActivityIndicator {...args} indicator="bounce" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Bar
        </Text>
        <ActivityIndicator {...args} indicator="bar" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Clip
        </Text>
        <ActivityIndicator {...args} indicator="clip" />
      </div>
    </ExampleRow>
    <ExampleRow>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Dot
        </Text>
        <ActivityIndicator {...args} indicator="dot" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Propagate
        </Text>
        <ActivityIndicator {...args} indicator="propagate" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Fade
        </Text>
        <ActivityIndicator {...args} indicator="fade" />
      </div>
    </ExampleRow>
    <ExampleRow>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Pulse
        </Text>
        <ActivityIndicator {...args} indicator="pulse" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Rotate
        </Text>
        <ActivityIndicator {...args} indicator="rotate" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Scale
        </Text>
        <ActivityIndicator {...args} indicator="scale" />
      </div>
    </ExampleRow>
    <ExampleRow>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Skew
        </Text>
        <ActivityIndicator {...args} indicator="skew" />
      </div>
      <div>
        <Text color="subtle" family="menlo" style={{ marginBottom: '16px' }}>
          Square
        </Text>
        <ActivityIndicator {...args} indicator="square" />
      </div>
    </ExampleRow>
  </ExampleContainer>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { loading: true };
export const AllOptions = AllOptionsTemplate.bind({});
AllOptions.args = { loading: true };
AllOptions.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'width',
      'height',
      'indicator',
      'loading',
      'radius',
      'ariaLive',
      'margin',
      'override',
    ],
  },
};
