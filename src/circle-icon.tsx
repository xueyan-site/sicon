import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="75"></circle>
  </g>
</svg>
`

export function CircleIcon(props: PackedIconProps) {
  return <Icon {...props} type="_CIRCLE" src={ICON} />
}
