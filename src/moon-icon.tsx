import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100,25 C101.866338,25 103.716753,25.0681703 105.548893,25.2021566 C91.9655551,34.1425274 83,49.5242549 83,67 C83,94.6142375 105.385763,117 133,117 C150.475745,117 165.857473,108.034445 174.796511,94.4520058 C174.93183,96.2832467 175,98.1336623 175,100 C175,141.421356 141.421356,175 100,175 C58.5786438,175 25,141.421356 25,100 C25,58.5786438 58.5786438,25 100,25 Z" stroke="currentColor" stroke-width="16" fill="currentColor"></path>
  </g>
</svg>
`

export function MoonIcon(props: PackedIconProps) {
  return <Icon {...props} type="_MOON" src={ICON} />
}       
