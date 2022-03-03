import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100,150 C127.614237,150 152.614237,133.333333 175,100 C152.614237,66.6666667 127.614237,50 100,50 C72.3857625,50 47.3857625,66.6666667 25,100 C47.3857625,133.333333 72.3857625,150 100,150 Z" stroke="currentColor" stroke-width="16"></path>
    <path d="M121.015799,78.591201 C115.60318,73.2773271 108.18432,70 100,70 C83.4314575,70 70,83.4314575 70,100 C70,107.877946 73.0365503,115.046667 78.0030631,120.399576" stroke="currentColor" stroke-width="16"></path>
    <line x1="150" y1="50" x2="50" y2="150" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const InvisibleIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_INVISIBLE" src={ICON} ref={ref} />
})
