import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="162 117 37 117 62 142"></polyline>
    <polyline stroke="currentColor" stroke-width="16" points="137 57 162 82 37 82"></polyline>
  </g>
</svg>
`

export function TransactionIcon(props: PackedIconProps) {
  return <Icon {...props} type="_TRANSACTION" src={ICON} />
}       
