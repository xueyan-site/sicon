import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke-width="16" points="160 85 100 25 40 85"></polyline>
    <line x1="100" y1="25" x2="100" y2="175" stroke-width="16"></line>
  </g>
</svg>
`

export function ArrowIcon(props: PackedIconProps) {
  return <Icon {...props} type="_ARROW" src={ICON} />
}
