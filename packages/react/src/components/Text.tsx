import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '2$xl' },
      '4xl': { fontSize: '4$xl' },
      '5xl': { fontSize: '5$xl' },
      '6xl': { fontSize: '6$xl' },
      '7xl': { fontSize: '7$xl' },
      '8xl': { fontSize: '8$xl' },
      '9xl': { fontSize: '9$xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
