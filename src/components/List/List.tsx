import React from 'react'
import {RenderVariant} from '../../types'
import styled from 'styled-components'
import {Block} from '../../layout'
import {respondTo} from '../../service/responseTo'

type Props = {
  onClick: (variant: RenderVariant) => void
}

export const List = (props: Props) => {
  const {onClick} = props

  return (
    <Root>
      <li onClick={() => onClick('timer')}>
        <Block hovered={true}>Set Timer</Block>
      </li>
      <li onClick={() => onClick('dice')}>
        <Block hovered={true}>Dice Roll</Block>
      </li>
      <li onClick={() => onClick('notion')}>
        <Block hovered={true}>Notion</Block>
      </li>
    </Root>
  )
}

const Root = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
  height: 80%;

  & > li > div {
    margin: 0 auto;
  }

  ${respondTo.s`
    gap: 12px;
    height: 50%;
  `}
`