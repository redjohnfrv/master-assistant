import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {Field, Panel} from './components'
import {fromNumber} from '../../utils/fromNumber'

export const RollDice = () => {
  const [throwValue, setThrowValue] = useState<number>(0)

  const onDicesRoll = useCallback(() => {
    setThrowValue(fromNumber.getDiceValue())
  }, [])

  return (
    <Root>
      <Field throwValue={throwValue}/>
      <Panel onRoll={onDicesRoll}/>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`