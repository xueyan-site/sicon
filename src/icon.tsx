import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './icon.scss'

export type IconDirection = 
  | 'top'
  | 'topRight'
  | 'right'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'left'
  | 'topLeft'

export interface IconRef {
  /** 根节点 */
  rootNode: SVGSVGElement | null
}

export interface IconProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 图标标识名（需保持在页面内唯一） */
  type: string
  /** svg字符串 */
  src: string
  /** 水平镜像（以图标正中央为中心点，左右对换） */
  flipX?: boolean
  /** 垂直镜像（以图标正中央为中心点，上下对换） */
  flipY?: boolean
  /** 旋转（正负代表顺逆方向，数值代表旋转大小，单位：deg） */
  rotate?: number
  /** 转动（正负代表顺逆方向，数值代表转动快慢，单位：ms） */
  rotating?: number
  /** 方向（默认方向为上） */
  direction?: IconDirection
  /** 停止转动 */
  paused?: boolean
  /** 自定义变换（优先级高于rotate、flipX、flipY） */
  transform?: React.CSSProperties['transform']
  /** 自定义过渡效果 */
  transition?: React.CSSProperties['transition']
  /** 大小（图标宽度和高度的值） */
  size?: React.CSSProperties['width']
  /** 颜色（需要svg内部的描边或填充色设置为currentColor才能生效） */
  color?: React.CSSProperties['color']
  /** 外边距 */
  margin?: React.CSSProperties['margin']
  /** 元素基线与行内基线的垂直对齐方式 */
  verticalAlign?: React.CSSProperties['verticalAlign']
}

export interface PackedIconProps extends Omit<IconProps, 'type'|'src'> {}

const DIRECTION_ROTATE_MAP: {
  [key: string]: number
} = {
  top: 0,
  topRight: 45,
  right: 90,
  bottomRight: 135,
  bottom: 180,
  bottomLeft: 225,
  left: 270,
  topLeft: 315
}

function loadIcon(type: string, src: string) {
  if (!document || !document.body || !type || !src) {
    return
  }
  const id = 'XR_ICON_' + type
  const svg = document.getElementById('XR_ICON')
  if (svg) {
    const syms = svg.children[0].children
    if (Array.from(syms || []).find(i => i.id === id)) {
      return
    }
    const lastSym = syms[syms.length - 1]
    if (lastSym) {
      const cont = src.split('<svg')[1].split('svg>')[0]
      if (cont) {
        lastSym.insertAdjacentHTML(
          'afterend',
          '<symbol id=' + id + cont + 'symbol>'
        )
      }
    }
  } else {
    const cont = src.split('<svg')[1].split('svg>')[0]
    if (cont) {
      document.body.insertAdjacentHTML(
        'afterend',
        '<svg id="XR_ICON" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none"><defs><symbol id='
          + id
          + cont
          + 'symbol></defs></svg>'
      )
    }
  }
}

export const Icon = forwardRef<IconRef, IconProps>((props, ref) => {
  const rootRef = useRef<SVGSVGElement>(null)

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  useEffect(() => {
    loadIcon(props.type, props.src)
  }, [props.type, props.src])

  // 计算 transaction 和 transform
  let transform = props.transform
  let transition = props.transition
  if (props.flipX || props.flipY) {
    transform = 'scale(' + (props.flipX ? '-1': '1') + ',' + (props.flipY ? '-1' : '1') + ')'
  }
  if (!props.rotating) {
    if (props.direction) {
      const deg = DIRECTION_ROTATE_MAP[props.direction]
      transform = (transform || '') + 'rotate(' + deg + ')'
      transition = 'transform 0.3s'
    } else if (props.rotate) {
      transform = (transform || '') + 'rotate(' + props.rotate + ')'
    }
  }

  const style: React.CSSProperties = {
    color: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    verticalAlign: props.verticalAlign,
    ...props.style,
  }
  if (props.rotating) {
    style.animationDuration = Math.abs(props.rotating) + 'ms'
    style.animationName = props.rotating > 0 ? styles.clockwise : styles.counterclockwise
  } else if (style.transition === undefined) {
    style.transition = transition
  }

  return (
    <svg
      ref={rootRef}
      className={cn(
        styles.xricon, 
        props.rotating && styles.rotating,
        props.paused && styles.paused,
        props.className,
      )}
      style={style}
      transform={transform}
    >
      <use xlinkHref={'#XR_ICON_' + props.type} />
    </svg>
  )
})
