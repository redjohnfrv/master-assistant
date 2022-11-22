import React from 'react'
import styled from 'styled-components'
import {Block} from '../../../../layout'
import {respondTo} from '../../../../service/responseTo'
import {UseFormRegister, UseFormResetField} from 'react-hook-form'
import {RollDiceFormType} from '../../../../types'

type Props = {
  register: UseFormRegister<RollDiceFormType>
  resetField: UseFormResetField<RollDiceFormType>
}

export const Panel = (props: Props) => {
  const {register} = props

  return (
    <Root>
      <input
        type="tel"
        {...register('dicesValue')}
        maxLength={1}
      />

      <span>number of dices</span>
    </Root>
  )
}

const Root = styled(Block)`
  display: flex;
  gap: 12px;
  width: 100%;
  height: max-content;
  
  &>input {
    width: 20px;
  }

  ${respondTo.s`
    width: 60%;
  `}
`