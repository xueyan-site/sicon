const fs = require('fs')

fs.readdir('./_icons_', (err, files) => {
  if (!err && files) {
    const list = files.map(file => {
      const name = file.split('.svg')[0]
      const varn = name.split('-').map(it => it[0].toUpperCase() + it.slice(1)).join('')+'Icon'
      return varn
    })
    const cont = list.map(varn => {
      return ` ${varn},`
    }).join('\n')
    const cont1 = list.map(varn => {
      return `<${varn} />`
    }).join('\n')
    fs.writeFile('./__cache', cont + '\n' + cont1, () => {})
  }
})

function toTable(str) {
  const re = /\/\*\* (.+?)(（(.+)）)? *\*\/\n *(\w+)(\?)?\: (.+)/g
  const res = []
  str.replaceAll(re, (...a) => { 
    res.push('| ' + [
      a[4],
      a[1],
      '\\`' + (a[5] ? '? ' : '') + a[6] + '\\`',
      a[3]
    ].join(' | ') + ' |')
    return ''
  })
  const dat = [
    '| 属性 | 名称 | 类型 | 说明 |',
    '| - | - | - | - |',
    res.join('\n')
  ].join('\n')
  console.log(dat)
}

// fs.readdir('./_icons_', (err, files) => {
//   if (!err && files) {
//     const cont = files.map(file => {
//       const name = file.split('.svg')[0]
//       const varn = name.split('-').map(it => it[0].toUpperCase() + it.slice(1)).join('')+'Icon'
//       return `export { ${varn} } from './${name + '-icon'}'`
//     }).join('\n')
//     fs.writeFile('./__cache', cont, () => {})
//   }
// })

// fs.readdir('./_icons_', (err, files) => {
//   if (!err && files) {
//     files.forEach((file, index) => {
//       // if (index > 0) return false;
//       const name = file.split('.svg')[0]
//       if (name) {
//         fs.readFile('./_icons_/' + file, 'utf8', (err, data) => {
//           if (!err && data) {
//             const ID_NAME = '_' + name.toUpperCase().replace('-', '_')
//             const VAR_NAME = name.split('-').map(it => it[0].toUpperCase() + it.slice(1)).join('')+'Icon'
//             const cont = `import React from 'react'
// import { Icon, PackedIconProps } from './icon'

// const ICON = \`
// <svg viewBox="0 0 200 200">
// ${data.trim().split('\n').map(i => '  ' + i).join('\n')}
// </svg>
// \`

// export function ${VAR_NAME}(props: PackedIconProps) {
//   return <Icon {...props} type="${ID_NAME}" src={ICON} />
// }       
// `
//             fs.writeFile(name + '-icon.tsx', cont, () => {
//               console.log(name + '-icon.tsx is completed!')
//             })
//           }
//         })
//       }
//     })
//   }
// })