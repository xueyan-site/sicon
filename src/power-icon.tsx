import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M59.999248,36.5460838 C38.9679888,49.8318449 25,73.2847232 25,100 C25,141.421356 58.5786438,175 100,175 C141.421356,175 175,141.421356 175,100 C175,73.2856712 161.033003,49.8335095 140.002991,36.5474983" stroke="currentColor" stroke-width="16"></path>
    <line x1="62.5" y1="62.5" x2="137.5" y2="62.5" stroke="currentColor" stroke-width="16" transform="translate(100.000000, 62.500000) rotate(-90.000000) translate(-100.000000, -62.500000) "></line>
  </g>
</svg>
`

export function PowerIcon(props: PackedIconProps) {
  return <Icon {...props} type="_POWER" src={ICON} />
}       
