import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="140" y1="100" x2="65" y2="100" stroke="currentColor" stroke-width="16" transform="translate(102.500000, 100.000000) rotate(180.000000) translate(-102.500000, -100.000000) "></line>
    <polyline stroke="currentColor" stroke-width="16" transform="translate(42.500000, 42.500000) rotate(180.000000) translate(-42.500000, -42.500000) " points="60 25 60 60 25 60"></polyline>
    <polyline stroke="currentColor" stroke-width="16" transform="translate(157.500000, 42.500000) scale(-1, 1) rotate(180.000000) translate(-157.500000, -42.500000) " points="175 25 175 60 140 60"></polyline>
    <polyline stroke="currentColor" stroke-width="16" transform="translate(157.500000, 157.500000) scale(-1, -1) rotate(180.000000) translate(-157.500000, -157.500000) " points="175 140 175 175 140 175"></polyline>
    <polyline stroke="currentColor" stroke-width="16" transform="translate(42.500000, 157.500000) scale(1, -1) rotate(180.000000) translate(-42.500000, -157.500000) " points="60 140 60 175 25 175"></polyline>
  </g>
</svg>
`

export const ScanIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_SCAN" src={ICON} ref={ref} />
})
