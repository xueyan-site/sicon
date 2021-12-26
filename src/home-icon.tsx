import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" transform="translate(100.000000, 100.000000) rotate(180.000000) translate(-100.000000, -100.000000) " points="164 25 164 125 100 175 36 125 36 25"></polygon>
  </g>
</svg>
`

export function HomeIcon(props: PackedIconProps) {
  return <Icon {...props} type="_HOME" src={ICON} />
}       
