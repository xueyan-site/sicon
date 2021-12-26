import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M137.500413,35.0339037 C126.468819,28.652377 113.660938,25 100,25 C58.5786438,25 25,58.5786438 25,100 C25,141.421356 58.5786438,175 100,175 C141.421356,175 175,141.421356 175,100" stroke-width="16"></path>
  </g>
</svg>
`

export function LoadingIcon(props: PackedIconProps) {
  return <Icon rotating={500} {...props} type="_LOADING" src={ICON} />
}
