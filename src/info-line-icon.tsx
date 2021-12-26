import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <circle stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" cx="100" cy="100" r="75"></circle>
    <path d="M100,75 C104.334914,75 107.864543,78.4478378 107.996193,82.7508207 L108,83 L108,148 C108,152.418278 104.418278,156 100,156 C95.6650857,156 92.1354571,152.552162 92.0038068,148.249179 L92,148 L92,83 C92,78.581722 95.581722,75 100,75 Z" fill="currentColor" fill-rule="nonzero"></path>
    <circle fill="currentColor" cx="100" cy="56" r="12"></circle>
  </g>
</svg>
`

export function InfoLineIcon(props: PackedIconProps) {
  return <Icon {...props} type="_INFO_LINE" src={ICON} />
}       
