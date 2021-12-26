import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" fill="currentColor" points="150 25 150 175 100 125 50 175 50 25"></polygon>
  </g>
</svg>
`

export function LabelIcon(props: PackedIconProps) {
  return <Icon {...props} type="_LABEL" src={ICON} />
}       
