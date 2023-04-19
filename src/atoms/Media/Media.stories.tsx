import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Media } from './Media';
import { MediaProps } from './Media.props';

const meta: Meta = {
  title: 'atoms/Media',
  component: Media,
  argTypes: {
    mediaSrc: {
      description: 'MediaSrc can accept gifs, pngs, svg, and webp.',
      control: {
        type: 'text',
      },
    },
    altText: {
      description:
        'Alt text description for accessibility. If the image is decorative, leave the alt text blank.',
      control: {
        type: 'text',
      },
    },
    width: {
      description:
        'Determine the size of the image via width. Default values are auto, icon, xs, small, medium, mlg, large, xl, and full. But can accept any image size.',
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

const Template: Story<MediaProps> = (args) => <Media {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  width: 'ml',
};
