import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="126" y1="54" x2="74" y2="79" stroke="currentColor" stroke-width="16"></line>
    <line x1="119" y1="130" x2="72" y2="103" stroke="currentColor" stroke-width="16"></line>
    <circle stroke="currentColor" stroke-width="16" cx="145" cy="45" r="20"></circle>
    <circle stroke="currentColor" stroke-width="16" cx="50" cy="90" r="25"></circle>
    <circle stroke="currentColor" stroke-width="16" cx="145" cy="145" r="30"></circle>
  </g>
</svg>
`

export function ShareIcon(props: PackedIconProps) {
  return <Icon {...props} type="_SHARE" src={ICON} />
}       
