import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {Field, Panel} from './components'
import {fromNumber} from '../../utils/fromNumber'

export const RollDice = () => {
  const [throwValue, setThrowValue] = useState<number>(0)
  const [tryNum, setTryNum] = useState<number>(0)

  const onDicesRoll = useCallback(() => {
    setThrowValue(fromNumber.getDiceValue())
    setTryNum(prev => prev + 1)
  }, [])

  return (
    <Root>
      <Field key={tryNum} throwValue={throwValue} onRoll={onDicesRoll}/>
      <Panel/>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`