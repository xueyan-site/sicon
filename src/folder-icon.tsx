import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" points="140 25 140 75 165 100 165 175 35 175 35 25"></polygon>
    <line x1="140" y1="110" x2="140" y2="175" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const FolderIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_FOLDER" src={ICON} ref={ref} />
})
