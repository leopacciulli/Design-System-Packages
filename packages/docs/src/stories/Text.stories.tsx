import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@react-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias excepturi nesciunt officiis. Error, dolorem. Velit, odio! Recusandae, deserunt eum facere quia obcaecati in voluptate tempora maiores incidunt assumenda dolore voluptatibus.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong Text',
  },
}
