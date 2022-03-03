import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="162 175 99.5 25 37 175"></polyline>
    <line x1="62" y1="125" x2="137" y2="125" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const FontIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_FONT" src={ICON} ref={ref} />
})
