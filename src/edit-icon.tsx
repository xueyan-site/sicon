import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="165 100 165 175 35 175 35 25 100 25"></polyline>
    <line x1="75" y1="129" x2="165" y2="25" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const EditIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_EDIT" src={ICON} ref={ref} />
})
