import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <line x1="100" y1="25" x2="100" y2="135" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></line>
    <circle fill="currentColor" cx="100" cy="171" r="14"></circle>
  </g>
</svg>
`

export function SighIcon(props: PackedIconProps) {
  return <Icon {...props} type="_SIGH" src={ICON} />
}       
