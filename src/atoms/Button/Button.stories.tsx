import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import styled from 'styled-components';
import { ButtonProps } from './Button.props';
import starIcon from '../../assets/images/star-icon.png';

const meta: Meta = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    name: {
      description:
        'Label of button, also used as aria text for screen readers.',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Size of overall button.',
      control: {
        type: 'radio',
        options: ['xs', 'small', 'medium', 'ml', 'large', 'xl'],
      },
    },
    variant: {
      description:
        'Color palette of button. Determines background, font, border, and hover colors.',
      control: {
        type: 'radio',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'quarterary',
          'transparent',
          'gradient',
        ],
      },
    },
    border: {
      description: 'Toggle for border.',
      control: {
        type: 'radio',
        options: ['none', 'small', 'medium'],
      },
    },
    borderRadius: {
      description: 'Determine the intensity of the border radius.',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'round', 'none'],
      },
    },
    boxShadow: {
      description: 'Determine the size of the box shadow.',
      control: {
        type: 'radio',
        options: ['small', 'large', 'inset', 'none'],
      },
    },
    fullWidth: {
      description: 'Allow button to stretch the full width of the container.',
      control: {
        type: 'boolean',
      },
    },
    hasIcon: {
      description:
        'Allows for an icon or media src and positions it trailing or leading.',
      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      description: 'Choose between an icon in front of the text or behind it.',
      control: {
        type: 'radio',
        options: ['leading', 'trailing'],
      },
    },
    mediaSrc: {
      description: 'Provide the source of the image or icon you want to use.',
      control: {
        type: 'text',
      },
    },
    mediaAlt: {
      description:
        'Provide the alt text for the image or icon you want to use.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'Toggles disabled state of onClick.',
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const ExampleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Template: Story<ButtonProps> = (args) => {
  return (
    <ExampleContainer>
      <Button {...args}></Button>
    </ExampleContainer>
  );
};

const SizesTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button size="xs" {...args} />
    <Button size="small" {...args} />
    <Button size="medium" {...args} />
    <Button size="ml" {...args} />
    <Button size="large" {...args} />
    <Button size="xl" {...args} />
  </ExampleContainer>
);

const VariantsTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Primary" variant="primary" {...args} />
    <Button name="Secondary" variant="secondary" {...args} />
    <Button name="Tertiary" variant="tertiary" {...args} />
    <Button name="Quarterary" variant="quarterary" {...args} />
    <Button name="Transparent" variant="transparent" {...args} />
    <Button name="Gradient" variant="gradient" {...args} />
  </ExampleContainer>
);

const BordersTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Small radius" borderRadius="small" {...args} />
    <Button name="Medium radius" borderRadius="medium" {...args} />
    <Button name="Large radius" borderRadius="large" {...args} />
    <Button name="Round radius" borderRadius="round" {...args} />
    <Button name="No radius" borderRadius="none" {...args} />
    <Button
      name="Medium border"
      border="medium"
      borderRadius="medium"
      {...args}
    />
    <Button
      name="Small border"
      border="small"
      borderRadius="medium"
      {...args}
    />
  </ExampleContainer>
);

const BoxShadowTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Small shadow" boxShadow="small" {...args} />
    <Button name="Large shadow" boxShadow="large" {...args} />
    <Button name="Inset shadow" boxShadow="inset" {...args} />
    <Button name="No box shadow" boxShadow="none" {...args} />
  </ExampleContainer>
);

const FullWidthTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button
      name="Full container width button"
      border="small"
      borderRadius="medium"
      fullWidth={'true'}
      {...args}
    />
    <Button name="Normal" border="medium" borderRadius="medium" {...args} />
  </ExampleContainer>
);
const IconButtonTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button
      name="Leading Icon"
      iconPosition="leading"
      mediaSrc={starIcon}
      {...args}
    />
    <Button
      name="Trailing Icon"
      iconPosition="trailing"
      mediaSrc={starIcon}
      {...args}
    />
  </ExampleContainer>
);

const DisabledTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Normal" {...args} />
    <Button name="Disabled" disabled {...args} />
  </ExampleContainer>
);

const ChildrenTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Normal" {...args}>
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white">
          <a href="#">
            <strong className="font-semibold">Lorem ipsum</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </Button>
  </ExampleContainer>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  name: 'Click me',
  variant: 'primary',
  size: 'large',
  border: 'small',
  borderRadius: 'medium',
  boxShadow: 'small',
  fullWidth: false,
};

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  name: 'Click me',
  variant: 'primary',
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {
  size: 'large',
};

export const Borders = BordersTemplate.bind({});
Borders.args = {
  size: 'large',
  variant: 'primary',
};

export const BoxShadow = BoxShadowTemplate.bind({});
BoxShadow.args = {
  variant: 'tertiary',
  size: 'large',
  border: 'none',
  borderRadius: 'medium',
};

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.args = {
  variant: 'primary',
  border: 'small',
};

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  variant: 'primary',
  size: 'large',
  border: 'small',
  borderRadius: 'medium',
  boxShadow: 'small',
  fullWidth: false,
  hasIcon: true,
};

export const DisabledButton = DisabledTemplate.bind({});
DisabledButton.args = {
  variant: 'primary',
  size: 'large',
  border: 'small',
  borderRadius: 'medium',
  boxShadow: 'small',
  fullWidth: false,
  hasIcon: false,
};

export const ChildrenButton = ChildrenTemplate.bind({});
ChildrenButton.args = {};
