import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100,150 C127.614237,150 152.614237,133.333333 175,100 C152.614237,66.6666667 127.614237,50 100,50 C72.3857625,50 47.3857625,66.6666667 25,100 C47.3857625,133.333333 72.3857625,150 100,150 Z" stroke="currentColor" stroke-width="16"></path>
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="30"></circle>
  </g>
</svg>
`

export function VisibleIcon(props: PackedIconProps) {
  return <Icon {...props} type="_VISIBLE" src={ICON} />
}       
