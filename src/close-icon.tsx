import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="38" y1="38" x2="163" y2="163" stroke="currentColor" stroke-width="16"></line>
    <line x1="163" y1="38" x2="38" y2="163" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export function CloseIcon(props: PackedIconProps) {
  return <Icon {...props} type="_CLOSE" src={ICON} />
}       
