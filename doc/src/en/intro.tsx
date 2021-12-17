import React, { useState, Fragment } from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import Playground from 'xueyan-react-playground'
import { Switch } from 'xueyan-react-icon'

const MARK1 = `
## xueyan-react-icon

\`xueyan-react-icon\` is a react component.  

## Usage
`

const code1 = `
import React, { useState } from 'react'
import Switch from 'xueyan-react-icon'

export default function Example() {
  const [state, setState] = useState<boolean>(false)
  return (
    <Fragment>
      <span>switch: </span>
      <Switch value={state} onChange={setState} />
    </Fragment>
  )
}
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Playground scope={{ React, useState, Fragment, Switch }}>
        {code1}
      </Playground>
    </Article>
  )
}
