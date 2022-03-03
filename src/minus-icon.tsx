import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="25" y1="100" x2="175" y2="100" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const MinusIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_MINUS" src={ICON} ref={ref} />
})
