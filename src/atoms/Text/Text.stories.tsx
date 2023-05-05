import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from './Text';
import styled from 'styled-components';
import { TextProps } from './Text.props';

const meta: Meta = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    children: {
      description:
        'Can accept strings or certain tags like blockquote can accept other components.',
      control: {
        type: 'text',
      },
    },
    family: {
      description:
        'Determines the font family. Can default to simply sans-serif, serif, or monospace, which defaults to Tailwind system fonts, or specify one of the below families.',
      table: { defaultValue: { summary: 'georgia' } },
      control: {
        type: 'radio',
        options: [
          'cambria',
          'georgia',
          'arial',
          'helveticaNeue',
          'roboto',
          'courierNew',
          'menlo',
          'monaco',
        ],
      },
    },
    role: {
      description:
        'Options for what tag will be used semantically and the main function of the text. Each tag has a default styling that can be overwritten.',
      table: { defaultValue: { summary: 'p' } },
      control: {
        type: 'radio',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'p',
          'blockquote',
          'ul',
          'ol',
          'li',
          'a',
        ],
      },
    },
    size: {
      description: 'Determines the font size and line height.',
      table: { defaultValue: { summary: 'base' } },
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'base', 'lg', 'xl', 'xxl', 'xxxl', 'ivxl', 'vxl'],
      },
    },
    weight: {
      description: 'Sets text weight.',
      table: { defaultValue: { summary: 'base' } },
      control: {
        type: 'radio',
        options: ['light', 'base', 'md', 'semibold', 'bold'],
      },
    },
    color: {
      description:
        'Sets font color. Default values based on the theme. Options are primary, secondary, tertiary, contrast, interactive, primaryHead, secondaryHead, tertiaryHead, quaternaryHead, You can also add custom rgba color values. Opacity is bundled in with color.',
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'radio',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'contrast',
          'interactive',
          'primaryHead',
          'secondaryHead',
          'tertiaryHead',
          'quaternaryHead',
        ],
      },
    },
    allCaps: {
      description: 'Transform text to all capitalized.',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    stylize: {
      description:
        'Stylize text into italics, strike through, or underlined. Certain tags have default styling.',
      table: { defaultValue: { summary: 'none' } },
      control: {
        type: 'radio',
        options: ['none', 'italic', 'strike', 'underline'],
      },
    },
    align: {
      description: 'Determines text alignment.',
      table: { defaultValue: { summary: 'left' } },
      control: {
        type: 'radio',
        options: ['left', 'right', 'center'],
      },
    },
    overflow: {
      description: 'Decides how to handle words larger than their container.',
      table: { defaultValue: { summary: 'break' } },
      control: {
        type: 'radio',
        options: ['break', 'hyphen'],
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
  width: 100%;
  padding: 20px;
  max-width: 1000px;
`;

const Template: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text {...args}>
        {args?.children ? args?.children : 'This is an example text.'}
      </Text>
    </ExampleContainer>
  );
};

const SizesTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Text size="vxl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="ivxl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="xxxl" {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text size="xxl" {...args}>
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
      <Text role="h1" color={'primaryHead'} {...args}>
        This is a primaryHead text example.
      </Text>
      <Text role="h2" color={'secondaryHead'} {...args}>
        This is a secondaryHead text example.
      </Text>
      <Text role="h3" color={'tertiaryHead'} {...args}>
        This is a tertiaryHead text example.
      </Text>
      <Text role="h4" color={'quaternaryHead'} {...args}>
        This is a quaternaryHead text example.
      </Text>
      <div
        style={{ background: '#596C87', padding: '12px', borderRadius: '6px' }}
      >
        <Text color={'contrast'} {...args}>
          This is a contrast text example.
        </Text>
      </div>
      <Text color={'primary'} {...args}>
        This is a primary text example.
      </Text>
      <Text color={'secondary'} {...args}>
        This is a secondary text example.
      </Text>
      <Text color={'tertiary'} {...args}>
        This is a tertiary text example.
      </Text>
      <Text color={'interactive'} {...args}>
        This is a interactive text example.
      </Text>
      <Text color={'#17A560'} {...args}>
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
      <div style={{ marginTop: '16px', width: '46vw' }}>
        <Text color="secondaryHead" role="h2" size="base" weight="semibold">
          Break:
        </Text>
        <Text color="secondary" overflow="break" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div style={{ marginTop: '16px', width: '46vw' }}>
        <Text color="secondaryHead" role="h2" size="base" weight="semibold">
          Hyphen:
        </Text>
        <Text color="secondary" overflow="hyphen" {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiut
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
          color="secondaryHead"
          role="h2"
          size="base"
          weight="semibold"
          align="left"
        >
          Align Left:
        </Text>
        <Text color="secondary" align="left" {...args}>
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
          color="secondaryHead"
          role="h2"
          size="base"
          weight="semibold"
          align="center"
        >
          Align Center:
        </Text>
        <Text color="secondary" align="center" {...args}>
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
          color="secondaryHead"
          role="h2"
          size="base"
          weight="semibold"
          align="right"
        >
          Align Right:
        </Text>
        <Text color="secondary" align="right" {...args}>
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

const FontFamExampleTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text
        family="lead"
        weight="base"
        stylize="italic"
        size="xl"
        color="tertiary"
        {...args}
      >
        Amet cursus sit amet dictum.
      </Text>
      <Text role="h1" style={{ margin: '0px 0px 32px 0px' }} {...args}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text role="p" color="secondary" {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Text
        size="sm"
        family="subtext"
        color="tertiary"
        style={{ margin: '8px' }}
        {...args}
      >
        *Mauris in aliquam sem fringilla ut
      </Text>
      <Text role="h2" style={{ margin: '32px 0px 16px 0px' }} {...args}>
        Excepteur sint occaecat
      </Text>
      <Text role="p" color="secondary" {...args}>
        Augue lacus viverra vitae congue eu consequat ac. Neque convallis a cras
        semper auctor neque. Vivamus arcu felis bibendum ut tristique et egestas
        quis ipsum. Interdum consectetur libero id faucibus nisl tincidunt eget
        nullam non. Urna id volutpat lacus laoreet non curabitur gravida arcu
        ac. Tortor consequat id porta nibh venenatis cras sed felis. Velit
        dignissim sodales ut eu sem integer vitae.
      </Text>
      <Text role="blockquote" style={{ margin: '6px 8px 24px 16px' }} {...args}>
        &quot;Commodo elit at imperdiet dui accumsan sit amet.&ldquo; - Smart
        Person
      </Text>
      <Text role="p" color="secondary" {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text role="h3" style={{ margin: '48px 0px 16px 0px' }}>
        Magna fermentum iaculis eu non diam phasellus?
      </Text>
      <Text role="p" color="secondary" {...args}>
        Sit amet justo donec enim diam vulputate. Elementum curabitur vitae nunc
        sed velit dignissim sodales ut. Justo eget magna fermentum iaculis eu
        non.
      </Text>
    </ExampleContainer>
  );
};

const ListTemplate: Story<TextProps> = (args) => {
  return (
    <ExampleContainer>
      <Text role="ul" style={{ margin: '0px 0px 32px 0px' }} {...args}>
        List Title
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
      </Text>
      <Text role="ol" style={{ margin: '32px 0px 24px 0px' }} {...args}>
        List Title
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text role="li" {...args}>
          Lorem ipsum dolor sit amet
        </Text>
      </Text>
    </ExampleContainer>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};
Sizes.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const Weights = WeightsTemplate.bind({});
Weights.args = { family: 'helveticaNeue' };
Weights.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const Colors = ColorsTemplate.bind({});
Colors.args = { align: 'left' };
Colors.parameters = {
  controls: {
    exclude: [
      'size',
      'family',
      'children',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const Stylize = StylizeTemplate.bind({});
Stylize.args = { align: 'left' };
Stylize.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {};
Overflow.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const Alignment = AlignmentTemplate.bind({});
Alignment.args = {};
Alignment.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
    ],
  },
};

export const AllCaps = AllCapsTemplate.bind({});
AllCaps.args = {};
AllCaps.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'role',
      'align',
    ],
  },
};

export const FontFamExample = FontFamExampleTemplate.bind({});
FontFamExample.args = {};
FontFamExample.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
      'children',
    ],
  },
};

export const List = ListTemplate.bind({});
List.args = {};
List.parameters = {
  controls: {
    exclude: [
      'size',
      'color',
      'family',
      'weight',
      'stylize',
      'overflow',
      'allCaps',
      'role',
      'align',
      'children',
    ],
  },
};
