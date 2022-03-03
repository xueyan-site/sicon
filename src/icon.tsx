import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './icon.scss'

interface IconStyle extends Pick<
  React.CSSProperties,
  | 'width'
  | 'height'
  | 'display'
  | 'transition'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
> {}

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

export interface IconProps extends IconStyle {
  /** 类名 */
  className?: string
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
  transform?: string
  /** 大小（图标宽度和高度的值） */
  size?: number | string
  /** 颜色（需要svg内部的描边或填充色设置为currentColor才能生效） */
  color?: React.CSSProperties['color']
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

export const Icon = forwardRef<IconRef, IconProps>(({
  className,
  type,
  src,
  flipX,
  flipY,
  rotate,
  rotating,
  direction,
  paused,
  transform,
  size,
  color,
  width,
  height,
  margin,
  display,
  transition,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
}, ref) => {
  const rootRef = useRef<SVGSVGElement>(null)

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  useEffect(() => {
    loadIcon(type, src)
  }, [type, src])

  // 计算 transaction 和 transform
  let _transition = undefined
  let _transform = undefined
  if (flipX || flipY) {
    _transform = 'scale(' + (flipX ? '-1': '1') + ',' + (flipY ? '-1' : '1') + ')'
  }
  if (!rotating) {
    if (direction) {
      const deg = DIRECTION_ROTATE_MAP[direction]
      if (deg) {
        _transform = (_transform || '') + 'rotate(' + deg + ')'
        _transition = 'transform 0.3s'
      }
    } else if (rotate) {
      _transform = (_transform || '') + 'rotate(' + rotate + ')'
    }
  }

  const style: React.CSSProperties = {
    width: size || width,
    height: size || height,
    transition: transition === undefined ? _transition : transition,
    color,
    display,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  }
  if (rotating) {
    style.animationDuration = Math.abs(rotating) + 'ms'
    style.animationName = rotating > 0 ? styles.clockwise : styles.counterclockwise
  }

  return (
    <svg
      ref={rootRef}
      className={cn(
        styles.icon, 
        rotating && styles.rotating,
        paused && styles.paused,
        className,
      )}
      transform={_transform || transform}
      style={style}
    >
      <use xlinkHref={'#XR_ICON_' + type} />
    </svg>
  )
})
