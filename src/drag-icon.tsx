import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <circle fill="currentColor" cx="125" cy="50" r="14"></circle>
    <circle fill="currentColor" cx="75" cy="50" r="14"></circle>
    <circle fill="currentColor" cx="75" cy="100" r="14"></circle>
    <circle fill="currentColor" cx="125" cy="100" r="14"></circle>
    <circle fill="currentColor" cx="75" cy="150" r="14"></circle>
    <circle fill="currentColor" cx="125" cy="150" r="14"></circle>
  </g>
</svg>
`

export function DragIcon(props: PackedIconProps) {
  return <Icon {...props} type="_DRAG" src={ICON} />
}       
