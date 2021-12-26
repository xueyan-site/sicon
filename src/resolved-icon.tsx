import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="75"></circle>
    <polyline stroke="currentColor" stroke-width="16" points="135 65 88.3333333 135 65 111.666667"></polyline>
  </g>
</svg>
`

export function ResolvedIcon(props: PackedIconProps) {
  return <Icon {...props} type="_RESOLVED" src={ICON} />
}       
