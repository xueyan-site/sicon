import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd">
    <line x1="100" y1="25" x2="100" y2="40" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></line>
    <path d="M25,160 L175,160 C158.333333,145.333333 150,133.666667 150,125 C150,116.333333 150,104.666667 150,90 C150,62.4299453 127.614237,40 100,40 C72.3857625,40 50,62.4299453 50,90 C50,104.666667 50,116.333333 50,125 C50,133.666667 41.6666667,145.333333 25,160 Z" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M100,185 C113.807119,185 125,173.807119 125,160 L75,160 C75,173.807119 86.1928813,185 100,185 Z" fill="currentColor"></path>
  </g>
</svg>
`

export function BellIcon(props: PackedIconProps) {
  return <Icon {...props} type="_BELL" src={ICON} />
}
