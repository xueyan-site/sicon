import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path d="M57,148 L57,65 C57,38.3333333 70.3333333,25 97,25 C123.666667,25 137,38.3333333 137,65 L137,148 C137,166 128.111111,175 110.333333,175 C92.5555556,175 83.6666667,166 83.6666667,148 L83.6666667,65 C83.6666667,55.9302767 88.1111111,51.395415 97,51.395415 C105.888889,51.395415 110.333333,55.9302767 110.333333,65 L110.333333,148" stroke="currentColor" stroke-width="16" transform="translate(97.000000, 100.000000) rotate(30.000000) translate(-97.000000, -100.000000) "></path>
  </g>
</svg>
`

export const ClipIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_CLIP" src={ICON} ref={ref} />
})
