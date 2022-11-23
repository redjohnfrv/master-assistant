import React from 'react'
import styled from 'styled-components'
import {UseFormRegister, UseFormResetField} from 'react-hook-form'
import {respondTo} from '../../../../service/responseTo'
import {RollDiceFormType} from '../../../../types'
import {Block} from '../../../../layout'
import {Input} from '../../../../ui'

type Props = {
  register: UseFormRegister<RollDiceFormType>
  resetField: UseFormResetField<RollDiceFormType>
}

export const Panel = (props: Props) => {
  const {register} = props

  return (
    <Root>
      <StyledInput
        type="text"
        {...register('dicesValue')}
        maxLength={1}
      />

      <span>dices</span>
    </Root>
  )
}

const Root = styled(Block)`
  display: flex;
  gap: 12px;
  width: max-content;
  height: max-content;
  align-items: center;

  ${respondTo.s`
    width: 60%;
  `}
`

const StyledInput = styled(Input)`
  width: 35px;
  text-align: center;
`