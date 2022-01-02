import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path d="M100,17 C145.839634,17 183,54.1603658 183,100 C183,145.839634 145.839634,183 100,183 C54.1603658,183 17,145.839634 17,100 C17,54.1603658 54.1603658,17 100,17 Z M100,136 C93.372583,136 88,141.372583 88,148 C88,154.627417 93.372583,160 100,160 C106.627417,160 112,154.627417 112,148 C112,141.372583 106.627417,136 100,136 Z M100,40 C88.0251266,40 80.3427701,42.9046662 74.3904914,49.382974 L74.3904914,49.382974 L73.869715,49.9638806 C71.8040469,52.3247396 69.9445022,55.1332092 68.1784231,58.4187007 L68.1784231,58.4187007 L67.7387854,59.2500286 L67.3026509,60.1013345 L67.0857751,60.5345111 C65.1196196,64.4912033 66.7332684,69.29262 70.6899605,71.2587755 C74.6466527,73.224931 79.4480694,71.6112822 81.4142249,67.65459 C81.4728514,67.5366102 81.5312421,67.4197497 81.5894155,67.3039992 L81.5894155,67.3039992 L81.9359966,66.6227405 C81.9933748,66.5113922 82.0505727,66.401135 82.1076088,66.2919594 L82.1076088,66.2919594 L82.4480302,65.6498105 L82.7854533,65.0331688 L83.1207645,64.4415812 L83.45485,63.874595 L83.7885965,63.3317571 L84.1228902,62.8126147 C86.7459825,58.8376241 89.5010353,57.0019201 94.3053545,56.3258854 L94.3053545,56.3258854 L94.9299519,56.2458073 L95.5777002,56.1778757 L96.2494859,56.1216377 C96.4775192,56.1047903 96.7097065,56.0898164 96.9461955,56.0766404 L96.9461955,56.0766404 L97.6687152,56.0424309 L98.4179316,56.0185562 L99.1947311,56.0045636 L100,56 C111.151462,56 119.246358,67.0090331 115.118581,77.1787905 C113.776834,80.4845015 112.069653,82.8126499 108.657728,86.1704724 L108.657728,86.1704724 L107.927049,86.8805448 L107.145085,87.623952 L105.346623,89.3129783 C105.197264,89.4541993 105.050288,89.5937031 104.905618,89.7315997 L104.905618,89.7315997 L104.06466,90.5405749 C103.928908,90.6724834 103.795308,90.803005 103.663784,90.9322497 L103.663784,90.9322497 L102.898925,91.6932769 C100.057712,94.5585657 98.2328884,96.8648879 96.4874094,99.9517828 C93.502787,105.230114 92,111.343983 92,118.8125 C92,123.230778 95.581722,126.8125 100,126.8125 C104.418278,126.8125 108,123.230778 108,118.8125 C108,111.043332 109.572531,107.603893 115.110739,102.127708 L115.110739,102.127708 L115.742537,101.510538 L116.407703,100.874664 L118.593405,98.8185448 C124.270233,93.4184652 127.427678,89.3955671 129.943919,83.1962095 C138.476571,62.1739985 122.172123,40 100,40 Z" fill="currentColor" fill-rule="nonzero"></path>
  </g>
</svg>
`

export function QuestionIcon(props: PackedIconProps) {
  return <Icon {...props} type="_QUESTION" src={ICON} />
}       