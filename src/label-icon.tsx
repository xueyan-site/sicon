import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="currentColor" stroke-width="1" fill="currentColor" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke-width="16" points="150 25 150 175 100 125 50 175 50 25"></polygon>
  </g>
</svg>
`

export const LabelIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_LABEL" src={ICON} ref={ref} />
})
