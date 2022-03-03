import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <circle fill="currentColor" cx="100" cy="100" r="14"></circle>
    <circle fill="currentColor" cx="50" cy="100" r="14"></circle>
    <circle fill="currentColor" cx="150" cy="100" r="14"></circle>
  </g>
</svg>
`

export const MoreIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_MORE" src={ICON} ref={ref} />
})
