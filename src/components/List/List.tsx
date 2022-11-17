import React from 'react'
import {RenderVariant} from '../../types'

type Props = {
  onClick: (variant: RenderVariant) => void
}

export const List = (props: Props) => {
  const {onClick} = props

  return (
    <ul>
      <li onClick={() => onClick('timer')}>Set Timer</li>
      <li onClick={() => onClick('dice')}>Dice Roll</li>
      <li onClick={() => onClick('notion')}>Notion</li>
    </ul>
  )
}