import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" points="175 85 55 85 55 175 175 175"></polygon>
    <path d="M85,60 L85,55 C85,38.0066231 71.5685425,25 55,25 C38.4314575,25 25,38.0066231 25,55 L25,85" stroke="currentColor" stroke-width="16" transform="translate(55.000000, 55.000000) scale(-1, 1) translate(-55.000000, -55.000000) "></path>
  </g>
</svg>
`

export function UnlockIcon(props: PackedIconProps) {
  return <Icon {...props} type="_UNLOCK" src={ICON} />
}       
