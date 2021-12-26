import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" fill="currentColor" points="155 100 55 50 55 150"></polygon>
  </g>
</svg>
`

export function PlayIcon(props: PackedIconProps) {
  return <Icon {...props} type="_PLAY" src={ICON} />
}       
