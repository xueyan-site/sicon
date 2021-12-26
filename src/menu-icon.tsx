import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="37" y1="50" x2="162" y2="50" stroke="currentColor" stroke-width="16"></line>
    <line x1="37" y1="100" x2="162" y2="100" stroke="currentColor" stroke-width="16"></line>
    <line x1="37" y1="150" x2="162" y2="150" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export function MenuIcon(props: PackedIconProps) {
  return <Icon {...props} type="_MENU" src={ICON} />
}       
