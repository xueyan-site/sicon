import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polygon stroke="currentColor" stroke-width="16" fill="currentColor" points="100 160.048155 80.5885716 172.444437 69.9759227 152.003227 46.9669914 153.033009 47.9967727 130.024077 27.555563 119.411428 39.9518455 100 27.555563 80.5885716 47.9967727 69.9759227 46.9669914 46.9669914 69.9759227 47.9967727 80.5885716 27.555563 100 39.9518455 119.411428 27.555563 130.024077 47.9967727 153.033009 46.9669914 152.003227 69.9759227 172.444437 80.5885716 160.048155 100 172.444437 119.411428 152.003227 130.024077 153.033009 153.033009 130.024077 152.003227 119.411428 172.444437"></polygon>
  </g>
</svg>
`

export function SunIcon(props: PackedIconProps) {
  return <Icon {...props} type="_SUN" src={ICON} />
}       
