import React, {useCallback, useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import {Field, Panel} from './components'
import {RollDiceFormType} from '../../types'
import {regexp} from '../../constants'

export const RollDice = () => {
  const {register, watch, resetField } = useForm<RollDiceFormType>({
    defaultValues: {
      dicesValue: 6,
    }
  })
  const [throwValue, setThrowValue] = useState<number>(6)
  const [tryNum, setTryNum] = useState<number>(0)
  const dicesValue = watch().dicesValue
  const isDiceValueCorrect = String(dicesValue) === ''
   || String(dicesValue).match(regexp.numberOfDicesRegEX)

  const onDicesRoll = useCallback(() => {
    setTryNum(prev => prev + 1)
  }, [])

  useEffect(() => {
    if (dicesValue && dicesValue > -1) {
      setThrowValue(dicesValue)
    }
  }, [dicesValue])

  useEffect(() => {
    if (!isDiceValueCorrect) {
      resetField('dicesValue')
      setThrowValue(0)
    }
  }, [dicesValue])

  return (
    <Root>
      <Field key={tryNum} throwValue={throwValue} onRoll={onDicesRoll}/>
      <Panel register={register} resetField={resetField} />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`