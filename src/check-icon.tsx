import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="175 25 75 175 25 125"></polyline>
  </g>
</svg>
`

export function CheckIcon(props: PackedIconProps) {
  return <Icon {...props} type="_CHECK" src={ICON} />
}
