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
      table: { defaultValue: { summary: 'base' } },
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'base', 'ml', 'lg', 'xl'],
      },
    },
    variant: {
      description:
        'Color palette of button. Determines background, font, border, and hover colors. Confirm and Destroy are specific utility variants and should be paired with an icon demonstrating clearly what the button is for.',
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'radio',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'quaternary',
          'transparent',
          'confirm',
          'destroy',
          'gradient',
        ],
      },
    },
    border: {
      description: 'Toggle for border.',
      table: { defaultValue: { summary: 'sm' } },

      control: {
        type: 'radio',
        options: ['none', 'sm', 'base', 'lg'],
      },
    },
    borderRadius: {
      description: 'Determine the intensity of the border radius.',
      table: { defaultValue: { summary: 'base' } },
      control: {
        type: 'radio',
        options: ['none', 'sm', 'base', 'lg', 'round'],
      },
    },
    boxShadow: {
      description: 'Determine the size of the box shadow.',
      table: { defaultValue: { summary: 'sm' } },
      control: {
        type: 'radio',
        options: ['none', 'sm', 'lg', 'inset'],
      },
    },
    fullWidth: {
      description: 'Allow button to stretch the full width of the container.',
      table: { defaultValue: { summary: 'false' } },

      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      description: 'Choose between an icon in front of the text or behind it.',
      table: { defaultValue: { summary: 'leading' } },
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
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
    isLoading: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
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
    <Button size="sm" {...args} />
    <Button size="base" {...args} />
    <Button size="ml" {...args} />
    <Button size="lg" {...args} />
    <Button size="xl" {...args} />
  </ExampleContainer>
);

const VariantsTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Primary" variant="primary" {...args} />
    <Button name="Secondary" variant="secondary" {...args} />
    <Button name="Tertiary" variant="tertiary" {...args} />
    <Button name="Quarterary" variant="quaternary" {...args} />
    <Button name="Transparent" variant="transparent" {...args} />
    <Button name="Gradient" variant="gradient" {...args} />
  </ExampleContainer>
);

const UtilVariantsTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Destroy" variant="destroy" {...args} />
    <Button name="Confirm" variant="confirm" {...args} />
  </ExampleContainer>
);

const BordersTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="No radius" borderRadius="none" {...args} />
    <Button name="Small radius" borderRadius="sm" {...args} />
    <Button name="Medium radius" borderRadius="base" {...args} />
    <Button name="Large radius" borderRadius="lg" {...args} />
    <Button name="Round radius" borderRadius="round" {...args} />
    <Button name="Small border" border="sm" borderRadius="base" {...args} />
    <Button name="Medium border" border="base" borderRadius="base" {...args} />
    <Button name="Large border" border="lg" borderRadius="base" {...args} />
  </ExampleContainer>
);

const BoxShadowTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="No box shadow" boxShadow="none" {...args} />
    <Button name="Small shadow" boxShadow="sm" {...args} />
    <Button name="Large shadow" boxShadow="lg" {...args} />
    <Button name="Inset shadow" boxShadow="inset" {...args} />
  </ExampleContainer>
);

const FullWidthTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer style={{ width: '100%' }}>
    <Button name="Full container width button" fullWidth={true} {...args} />
    <Button name="Normal" border="base" borderRadius="base" {...args} />
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

const LongLabelTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button {...args} />
  </ExampleContainer>
);

const ChildrenTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Normal" {...args}>
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white">
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
        </p>
      </div>
    </Button>
  </ExampleContainer>
);

const LoadingTemplate: Story<ButtonProps> = (args) => (
  <ExampleContainer>
    <Button name="Loading" isLoading iconPosition="leading" {...args} />
  </ExampleContainer>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  name: 'Click me',
};

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  name: 'Click me',
};
Sizes.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {
  size: 'lg',
  border: 'sm',
};
Variants.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const UtilVariants = UtilVariantsTemplate.bind({});
UtilVariants.args = {
  size: 'lg',
};
UtilVariants.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const Borders = BordersTemplate.bind({});
Borders.args = {
  size: 'lg',
  variant: 'primary',
};
Borders.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const BoxShadow = BoxShadowTemplate.bind({});
BoxShadow.args = {
  variant: 'tertiary',
  size: 'lg',
  border: 'none',
  borderRadius: 'base',
};

BoxShadow.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.args = {
  variant: 'primary',
  border: 'sm',
};
FullWidth.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  variant: 'primary',
  size: 'lg',
  border: 'sm',
  borderRadius: 'base',
  boxShadow: 'sm',
  fullWidth: false,
};
IconButton.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const LongLabel = LongLabelTemplate.bind({});
LongLabel.args = {
  name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
LongLabel.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const DisabledButton = DisabledTemplate.bind({});
DisabledButton.args = {
  variant: 'primary',
  size: 'lg',
  border: 'sm',
  borderRadius: 'base',
  boxShadow: 'sm',
  fullWidth: false,
};
DisabledButton.parameters = {
  controls: {
    exclude: [
      'variant',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
    ],
  },
};

export const LoadingButton = LoadingTemplate.bind({});
LoadingButton.args = {};
LoadingButton.parameters = {
  controls: {
    exclude: [
      'variant',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};

export const ChildrenButton = ChildrenTemplate.bind({});
ChildrenButton.args = {};
ChildrenButton.parameters = {
  controls: {
    exclude: [
      'variant',
      'name',
      'disabled',
      'size',
      'border',
      'borderRadius',
      'boxShadow',
      'fullWidth',
      'iconPosition',
      'mediaSrc',
      'mediaAlt',
      'isLoading',
      'onClick',
    ],
  },
};
