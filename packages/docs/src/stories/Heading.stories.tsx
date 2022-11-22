import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@react-ds/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default heading H2',
      },
    },
  },
}
