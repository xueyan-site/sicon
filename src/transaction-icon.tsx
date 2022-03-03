import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="162 117 37 117 62 142"></polyline>
    <polyline stroke="currentColor" stroke-width="16" points="137 57 162 82 37 82"></polyline>
  </g>
</svg>
`

export const TransactionIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_TRANSACTION" src={ICON} ref={ref} />
})
