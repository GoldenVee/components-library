import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Placeholder } from './Placeholder';
import { PlaceholderProps } from './Placeholder.props';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'atoms/Placeholder',
  component: Placeholder,
  argTypes: {
    count: {
      description: 'Determines how many lines are in the placeholder skeleton.',
      control: {
        type: 'number',
      },
    },
    width: {
      description:
        'Width of the lines in the placeholder skeleton. If not specified, will get its width from the content its replacing.',
      control: {
        type: 'number',
      },
    },
    height: {
      description: 'Height of the lines in the placeholder skeleton.',
      control: {
        type: 'number',
      },
    },
    borderRadius: {
      description: 'The border radius of the placeholder skeleton.',
      control: {
        type: 'number',
      },
    },
    circle: {
      description: 'Turns the placeholder skeleton into a circle.',
      control: {
        type: 'boolean',
      },
    },
    baseColor: {
      description: 'Choose a custom color for the placeholder skeleton.',
      control: {
        type: 'text',
      },
    },
    highlightColor: {
      description:
        'Choose a custom color for highlight used in the animation for the placeholder skeleton.',
      control: {
        type: 'text',
      },
    },
    inline: {
      description:
        'The default behavior includes a <br> between lines. Toggle inline false to remove line breaks.',
      control: {
        type: 'boolean',
      },
    },
    duration: {
      description: 'Determines the length of animation measured in seconds.',
      control: {
        type: 'number',
      },
    },
    direction: {
      description: 'Provides rtl support. Defaults to ltr.',
      control: {
        type: 'text',
      },
    },
    enableAnimation: {
      description:
        'Toggles highlight animation. If prefers-reduced-motion detected, this toggles false.',
      control: {
        type: 'boolean',
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
  flex-wrap: wrap;
  height: fit-content;
  width: 96%;
  margin: 24px;
  max-width: 1000px;
`;

const Template: Story<PlaceholderProps> = (args) => (
  <ExampleContainer>
    <Placeholder {...args} />
  </ExampleContainer>
);

const ExampleTemplate: Story<PlaceholderProps> = (args) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ExampleContainer>
      <Button
        variant="primary"
        size="small"
        name="Toggle Loading"
        onClick={() => setIsLoading(!isLoading)}
      />
      <Text
        family="lead"
        weight="base"
        stylize="italic"
        size="xl"
        color="nonessential"
        align="left"
        style={{ marginTop: '48px' }}
        {...args}
      >
        {isLoading ? (
          <Placeholder width="30%" />
        ) : (
          'Amet cursus sit amet dictum.'
        )}
      </Text>
      <Text role="h1" style={{ margin: '4px 0px 32px 0px' }} {...args}>
        {isLoading ? <Placeholder width="74%" /> : 'Lorem ipsum dolor sit amet'}
      </Text>
      <Text role="p" color="subtle" {...args}>
        {isLoading ? (
          <Placeholder count={4} width="98%" />
        ) : (
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )}
      </Text>
      <Text
        size="sm"
        family="subtext"
        color="nonessential"
        style={{ margin: '16px' }}
        {...args}
      >
        {isLoading ? (
          <Placeholder width="26%" />
        ) : (
          '*Mauris in aliquam sem fringilla ut'
        )}
      </Text>
    </ExampleContainer>
  );
};
const RTLTemplate: Story<PlaceholderProps> = (args) => {
  const [rtlSupported, setRTLSupported] = useState(true);

  return (
    <ExampleContainer dir={rtlSupported ? 'rtl' : 'ltr'}>
      <Button
        variant={'primary'}
        size="small"
        name="Toggle RTL"
        onClick={() => setRTLSupported(!rtlSupported)}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '45%',
          marginTop: '32px',
          justifyContent: 'space-between',
        }}
      >
        <Placeholder
          circle
          width={42}
          height={42}
          inline
          direction={rtlSupported ? 'rtl' : 'ltr'}
          {...args}
        />
        <Placeholder
          count={2}
          width={300}
          direction={rtlSupported ? 'rtl' : 'ltr'}
          {...args}
        />
        <Placeholder
          count={2}
          width={360}
          direction={rtlSupported ? 'rtl' : 'ltr'}
          {...args}
        />
      </div>
    </ExampleContainer>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { count: 3, width: 300 };

export const Example = ExampleTemplate.bind({});
Example.args = {};

export const RTL = RTLTemplate.bind({});
RTL.args = {};
