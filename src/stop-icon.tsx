import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <rect stroke="currentColor" stroke-width="16" fill="currentColor" x="50" y="50" width="100" height="100" rx="16"></rect>
  </g>
</svg>
`

export function StopIcon(props: PackedIconProps) {
  return <Icon {...props} type="_STOP" src={ICON} />
}       
