import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" stroke-width="16"></line>
    <polygon stroke="currentColor" stroke-width="16" fill="currentColor" points="150 100 50 50 50 150"></polygon>
  </g>
</svg>
`

export function StepIcon(props: PackedIconProps) {
  return <Icon {...props} type="_STEP" src={ICON} />
}       
