import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="115" y1="50" x2="85" y2="150" stroke="currentColor" stroke-width="16"></line>
    <polyline stroke="currentColor" stroke-width="16" points="50 60 25 100 50 140"></polyline>
    <polyline stroke="currentColor" stroke-width="16" points="150 60 175 100 150 140"></polyline>
  </g>
</svg>
`

export function CodeIcon(props: PackedIconProps) {
  return <Icon {...props} type="_CODE" src={ICON} />
}       
