import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@kns-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'default',
  },
} 

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
}