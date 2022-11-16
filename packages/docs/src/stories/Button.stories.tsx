import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@react-ds/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Button Primary',
  },
}

export const Secondary: StoryObj = {
  args: {
    children: 'Button Secondary',
  },
}
