import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
图标组件

\`\`\`ts
type Icon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<IconRef>
>
\`\`\`

## IconProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| type | 图标标识名 | \`string\` | 需保持在页面内唯一 |
| src | svg字符串 | \`string\` |  |
| flipX | 水平镜像 | \`? boolean\` | 以图标正中央为中心点，左右对换 |
| flipY | 垂直镜像 | \`? boolean\` | 以图标正中央为中心点，上下对换 |
| rotate | 旋转 | \`? number\` | 正负代表顺逆方向，数值代表旋转大小，单位：deg |
| rotating | 转动 | \`? number\` | 正负代表顺逆方向，数值代表转动快慢，单位：ms |
| direction | 方向 | \`? IconDirection\` | 默认方向为上 |
| paused | 停止转动 | \`? boolean\` |  |
| transform | 自定义变换 | \`? React.CSSProperties['transform']\` | 优先级高于rotate、flipX、flipY |
| transition | 自定义过渡效果 | \`? React.CSSProperties['transition']\` |  |
| size | 大小 | \`? React.CSSProperties['width']\` | 图标宽度和高度的值，默认是 1em |
| color | 颜色 | \`? React.CSSProperties['color']\` | 需要svg内部的描边或填充色设置为currentColor才能生效 |
| margin | 外边距 | \`? React.CSSProperties['margin']\` |  |
| verticalAlign | 元素基线与行内基线的垂直对齐方式 | \`? React.CSSProperties['verticalAlign']\` |  |

## IconProps.src

SVG 字符串中的 stroke 和 fill 属性值，可用 currentColor 替换。

\`\`\`tsx
const ICON = \`
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="75"></circle>
  </g>
</svg>
\`
<Icon type="xxx" src={ICON}/>
\`\`\`

## IconDirection

\`\`\`ts
type IconDirection = 
  | 'top'          // 相当于 rotate = 0deg
  | 'topRight'     // 相当于 rotate = 45deg
  | 'right'        // 相当于 rotate = 90deg
  | 'bottomRight'  // 相当于 rotate = 135deg
  | 'bottom'       // 相当于 rotate = 180deg
  | 'bottomLeft'   // 相当于 rotate = 225deg
  | 'left'         // 相当于 rotate = 270deg
  | 'topLeft'      // 相当于 rotate = 315deg
\`\`\`

## IconRef

\`\`\`ts
interface IconRef {
  /** 根节点 */
  rootNode: SVGSVGElement | null
}
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
