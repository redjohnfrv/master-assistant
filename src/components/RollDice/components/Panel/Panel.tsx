import React from 'react'
import styled from 'styled-components'

type Props = {
  onRoll: () => void
}

export const Panel = (props: Props) => {
  const {onRoll} = props

  return (
    <Root>
      <button onClick={onRoll}>Roll</button>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 40%;
  padding-bottom: 60px;
`