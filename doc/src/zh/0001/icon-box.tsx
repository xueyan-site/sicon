import React, { createElement } from 'react'
import cn from 'classnames'
import { copyToClipboard } from 'utl/browser'
import styles from './icon-box.scss'

export function IconBox({
  className,
  name,
  icon
}: {
  className?: string
  name: string
  icon: React.ComponentType<any>
}) {
  return (
    <div 
      className={cn(className, styles.iconbox)}
      onClick={() => {
        if (copyToClipboard(`<${name} />`)) {
          alert('代码复制成功')
        }
      }}
    >
      {createElement(icon, { className: styles.icon })}
      <div className={styles.name}>{name}</div>
    </div>
  )
}