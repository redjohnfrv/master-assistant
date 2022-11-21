import React from 'react'
import styled from 'styled-components'
import {Block} from '../../../../layout'
import {respondTo} from '../../../../service/responseTo'

export const Panel = () => {

  return (
    <Root>
      Here will be a control panel soon...
    </Root>
  )
}

const Root = styled(Block)`
  width: 100%;
  height: max-content;

  ${respondTo.s`
    width: 60%;
  `}
`