import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$white',
  padding: '$2 $4',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '$ignite400',
  },
  '&:active': {
    backgroundColor: '$ignite500',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite300',
        '&:hover': {
          backgroundColor: '$ignite400',
        },
        '&:active': {
          backgroundColor: '$ignite500',
        },
      },
      secondary: {
        backgroundColor: '$ignite100',
        color: '$ignite500',
        '&:hover': {
          backgroundColor: '$ignite200',
        },
        '&:active': {
          backgroundColor: '$ignite300',
        },
      },
    },
    size: {
      default: {
        padding: '$2 $4',
      },
      lg: {
        padding: '$3 $5',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
