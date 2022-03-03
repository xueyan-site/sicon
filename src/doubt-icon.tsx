import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <circle fill="currentColor" cx="100" cy="171" r="14"></circle>
    <path d="M100,135 C100,100 124.852814,100 135,75 C145.147186,50 125,25 100,25 C75,25 67.3632754,35.1833849 60,50.0012436" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
</svg>
`

export const DoubtIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_DOUBT" src={ICON} ref={ref} />
})
