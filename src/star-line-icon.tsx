import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" points="100 147 52.9771798 171.72136 61.9577393 119.36068 23.9154787 82.2786405 76.4885899 74.6393202 100 27 123.51141 74.6393202 176.084521 82.2786405 138.042261 119.36068 147.02282 171.72136"></polygon>
  </g>
</svg>
`

export const StarLineIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_STAR_LINE" src={ICON} ref={ref} />
})
