import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from './Text';
import styled from 'styled-components';
import { TextProps } from './Text.props';

const meta: Meta = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    family: {
      description:
        'Determines the font family. Can default to simply sans-serif, serif, or monospace, which defaults to Tailwind system fonts, or specify one of the below families.',
      control: {
        type: 'radio',
        options: ['serif', 'sansSerif', 'monospace'],
      },
    },
    role: {
      description:
        'Options for what tag will be used semantically and the main function of the text.',
      control: {
        type: 'radio',
        options: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code', 'a'],
      },
    },
    size: {
      description: 'Determines the font size and line height.',
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      },
    },
    weight: {
      description: 'Sets text weight.',
      control: {
        type: 'radio',
        options: ['light', 'base', 'md', 'semibold', 'bold'],
      },
    },
    color: {
      description:
        'Set font color. Default values based on the theme are contrast, base, subtle, nonessential, and interactive. You can also add custom rgba color values. Opacity is bundled in with color.',
      control: {
        type: 'text',
      },
    },
    allCaps: {
      description: 'Transform text to all capitalized.',
      control: {
        type: 'boolean',
      },
    },
    stylize: {
      description: 'Change text into italics, strike through, or underlined.',
      control: {
        type: 'radio',
        options: ['none', 'italic', 'strike', 'underline'],
      },
    },
    align: {
      description: 'Determines text alignment.',
      control: {
        type: 'radio',
        options: ['left', 'right', 'center'],
      },
    },
    overflow: {
      description: 'Decides how to handle words larger than their container.',
      control: {
        type: 'radio',
        options: ['truncate', 'break', 'hyphen'],
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
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  max-width: 1000px;
`;

const Template: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text {...args}>This is a text example.</Text>
    </ExampleContainer>
  );
};

const SizesTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '360px',
      }}
    >
      <Text size="5xl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="4xl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="3xl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="2xl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="xl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="lg" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="base" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="sm" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="xs" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
    </ExampleContainer>
  );
};

const WeightsTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text weight="bold" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text weight="semibold" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text weight="base" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text weight="light" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
    </ExampleContainer>
  );
};

const ColorsTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text color={'contrast'} {...args}>
        This is a contrast text example.
      </Text>
      <Text color={'base'} {...args}>
        This is a base text example.
      </Text>
      <Text color={'subtle'} {...args}>
        This is a subtle text example.
      </Text>
      <Text color={'nonessential'} {...args}>
        This is a nonessential text example.
      </Text>
      <Text color={'interactive'} {...args}>
        This is a interactive text example.
      </Text>
      <Text color={'#119c59'} {...args}>
        This is a custom text example.
      </Text>
    </ExampleContainer>
  );
};
const StylizeTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text stylize="none" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text stylize="italic" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text stylize="strike" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text stylize="underline" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
    </ExampleContainer>
  );
};

const OverflowTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <div style={{ width: '500px', marginTop: '16px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
        >
          Truncate:
        </Text>
        <Text family="sansSerif" color="subtle" overflow="truncate" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenimadminimveniam,quisnostrudexercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div style={{ width: '500px', marginTop: '16px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
        >
          Break:
        </Text>
        <Text family="sansSerif" color="subtle" overflow="break" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenimadminimveniam,quisnostrudexercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div style={{ width: '500px', marginTop: '16px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
        >
          Hyphen:
        </Text>
        <Text family="sansSerif" color="subtle" overflow="hyphen" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenimadminimveniam,quisnostrudexercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    </ExampleContainer>
  );
};
const AlignmentTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <div style={{ marginTop: '24px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
          align="left"
        >
          Align Left:
        </Text>
        <Text family="sansSerif" color="subtle" align="left" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div style={{ marginTop: '56px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
          align="center"
        >
          Align Center:
        </Text>
        <Text family="sansSerif" color="subtle" align="center" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div style={{ marginTop: '56px' }}>
        <Text
          family="serif"
          color="contrast"
          role="h2"
          size="base"
          weight="semibold"
          align="right"
        >
          Align Right:
        </Text>
        <Text family="sansSerif" color="subtle" align="right" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    </ExampleContainer>
  );
};

const AllCapsTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text {...args}>Lorem ipsum dolor sit amet</Text>
      <Text allCaps {...args}>
        Lorem ipsum dolor sit amet
      </Text>
    </ExampleContainer>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};

export const Sizes = SizesTemplate.bind({});
Sizes.args = { family: 'serif', weight: 'base' };

export const Weights = WeightsTemplate.bind({});
Weights.args = { family: 'serif', size: 'base' };

export const Colors = ColorsTemplate.bind({});
Colors.args = { family: 'serif' };

export const Stylize = StylizeTemplate.bind({});
Stylize.args = { family: 'serif', size: 'base' };

export const Overflow = OverflowTemplate.bind({});
Overflow.args = { family: 'serif', size: 'sm' };

export const Alignment = AlignmentTemplate.bind({});
Overflow.args = { family: 'serif', size: 'sm' };

export const AllCaps = AllCapsTemplate.bind({});
Overflow.args = { family: 'monospace', size: 'base' };
