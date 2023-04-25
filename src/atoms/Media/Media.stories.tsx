import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Media } from './Media';
import { MediaProps } from './Media.props';
import styled from 'styled-components';
import geometric from '../../assets/images/geometric.png';
import maxwellTheCat from '../../assets/images/maxwell-the-cat.gif';

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

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  max-width: 1000px;
`;

const Template: Story<MediaProps> = (args) => <Media {...args} />;
const ExampleTemplate: Story<MediaProps> = (args) => (
  <ExampleContainer>
    <div>
      <p style={{ marginBottom: '16px' }}>Local image:</p>
      <Media mediaSrc={geometric} altText="cat sleeping on robot" {...args} />
    </div>
    <div>
      <p style={{ marginBottom: '16px' }}>Url image:</p>
      <Media
        mediaSrc="https://media.sketchfab.com/models/26f966d4a8e34828a36058ddd6b8a72a/thumbnails/c1d0e2e95cfd4fa5ab49456b47780448/18c761a640ec4e13b18adc9ff17f94fb.jpeg"
        altText="puppycat"
        width="medium"
        {...args}
      />
    </div>
    <div>
      <p style={{ marginBottom: '16px' }}>Local gif:</p>
      <Media
        mediaSrc={maxwellTheCat}
        altText="dancing cat gif"
        width="small"
        {...args}
      />
    </div>
  </ExampleContainer>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  width: 'ml',
};
export const Examples = ExampleTemplate.bind({});
Examples.args = {};
