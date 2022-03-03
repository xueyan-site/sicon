import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" points="160 85 40 85 40 175 160 175"></polygon>
    <path d="M130,85 L130,65 C130,48.0066231 116.568542,35 100,35 C83.4314575,35 70,48.0066231 70,65 L70,85" stroke="currentColor" stroke-width="16"></path>
  </g>
</svg>
`

export const LockedIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_LOCKED" src={ICON} ref={ref} />
})
