import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" points="125 25 165 70 165 175 35 175 35 25"></polygon>
    <line x1="65" y1="135" x2="135" y2="135" stroke="currentColor" stroke-width="16"></line>
    <line x1="65" y1="100" x2="125" y2="100" stroke="currentColor" stroke-width="16"></line>
    <line x1="65" y1="65" x2="100" y2="65" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const FileIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_FILE" src={ICON} ref={ref} />
})
