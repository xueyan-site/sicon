import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path d="M100,17 C145.839634,17 183,54.1603658 183,100 C183,145.839634 145.839634,183 100,183 C54.1603658,183 17,145.839634 17,100 C17,54.1603658 54.1603658,17 100,17 Z M100,77 C95.581722,77 92,80.581722 92,85 L92,85 L92,150 L92.0038068,150.249179 C92.1354571,154.552162 95.6650857,158 100,158 C104.418278,158 108,154.418278 108,150 L108,150 L108,85 L107.996193,84.7508207 C107.864543,80.4478378 104.334914,77 100,77 Z M100,42 C93.372583,42 88,47.372583 88,54 C88,60.627417 93.372583,66 100,66 C106.627417,66 112,60.627417 112,54 C112,47.372583 106.627417,42 100,42 Z" fill="currentColor" fill-rule="nonzero"></path>
  </g>
</svg>
`

export const InfoIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_INFO" src={ICON} ref={ref} />
})
