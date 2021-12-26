import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="150" y1="125" x2="150" y2="175" stroke="currentColor" stroke-width="16"></line>
    <line x1="50" y1="25" x2="50" y2="175" stroke="currentColor" stroke-width="16"></line>
    <line x1="100" y1="75" x2="100" y2="175" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export function DecreaseIcon(props: PackedIconProps) {
  return <Icon {...props} type="_DECREASE" src={ICON} />
}       
