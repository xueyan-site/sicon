import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="165 70 165 175 35 175 35 25 100 25"></polyline>
    <polyline stroke="currentColor" stroke-width="16" points="125 125 100 150 75 125"></polyline>
    <path d="M165,25 C118.203412,50 100,75 100,150" stroke="currentColor" stroke-width="16"></path>
  </g>
</svg>
`

export const ImportIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_IMPORT" src={ICON} ref={ref} />
})
