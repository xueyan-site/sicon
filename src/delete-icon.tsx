import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="125" y1="25" x2="75" y2="25" stroke="currentColor" stroke-width="16"></line>
    <line x1="85" y1="125" x2="85" y2="75" stroke="currentColor" stroke-width="16"></line>
    <line x1="115" y1="125" x2="115" y2="75" stroke="currentColor" stroke-width="16"></line>
    <line x1="175" y1="33" x2="25" y2="33" stroke="currentColor" stroke-width="16"></line>
    <polyline stroke="currentColor" stroke-width="16" points="160 33 150 175 50 175 40 33"></polyline>
  </g>
</svg>
`

export function DeleteIcon(props: PackedIconProps) {
  return <Icon {...props} type="_DELETE" src={ICON} />
}       
