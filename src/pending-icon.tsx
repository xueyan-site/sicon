import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M135,60 L170.734151,75.0050744 C160.439673,45.8726144 132.657367,25 100,25 C58.5786438,25 25,58.5786438 25,100 C25,141.421356 58.5786438,175 100,175 C132.654965,175 160.435587,154.130456 170.731879,125.001353" stroke="currentColor" stroke-width="16"></path>
  </g>
</svg>
`

export function PendingIcon(props: PackedIconProps) {
  return <Icon rotating={500} {...props} type="_PENDING" src={ICON} />
}       
