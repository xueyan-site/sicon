import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="132" y1="132" x2="175" y2="175" stroke-width="16"></line>
    <circle stroke-width="16" cx="87.5" cy="87.5" r="62.5"></circle>
  </g>
</svg>
`

export function SearchIcon(props: PackedIconProps) {
  return <Icon {...props} type="_SEARCH" src={ICON} />
}
