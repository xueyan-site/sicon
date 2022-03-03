import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="75"></circle>
    <line x1="65" y1="65" x2="135" y2="135" stroke="currentColor" stroke-width="16"></line>
    <line x1="135" y1="65" x2="65" y2="135" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const RejectedIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_REJECTED" src={ICON} ref={ref} />
})
