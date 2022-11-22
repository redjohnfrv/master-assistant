import React from 'react'
import styled from 'styled-components'
import {Dice} from '../Dice'
import {Block} from '../../../../layout'
import {respondTo} from '../../../../service/responseTo'

const DICES_MAX_AMOUNT = 6
const DOTS_MAX_AMOUNT = 6

type Props = {
  throwValue: number
  onRoll: () => void
}

export const Field = (props: Props) => {
  const {throwValue, onRoll} = props

  if (throwValue < 1) {
    return (
      <Root $diceAmount={0}>
        <ClickArea onClick={onRoll}/>
      </Root>
    )
  }

  return (
    <Root $diceAmount={throwValue}>
      {Array.from({length: DICES_MAX_AMOUNT})
        .map((_, i) => <Dice key={i} dots={DOTS_MAX_AMOUNT}/>)}
      <ClickArea onClick={onRoll}/>
    </Root>
  )
}

const Root = styled(Block)<{ $diceAmount: number }>`
  position: relative;
  width: 100%;
  height: 60%;
  background: ${({theme: {colors}}) => colors.primary.op300} !important;

  & > div {
    position: absolute;
    opacity: 0;

    &:nth-child(1) {
      top: 25px;
      left: 25px;
      opacity: 1;

      ${respondTo.s`
        top: 10px;
        left: 5px;
      `}
    }

    &:nth-child(2) {
      top: 10px;
      left: 40%;
      opacity: ${({$diceAmount}) => $diceAmount > 1 ? 1 : 0};

      ${respondTo.s`
        top: 15px;
        left: 65%;
      `}
    }

    &:nth-child(3) {
      top: 50%;
      left: 10%;
      opacity: ${({$diceAmount}) => $diceAmount > 2 ? 1 : 0};

      ${respondTo.s`
        top: 40%;
        left: 16%;
      `}
    }

    &:nth-child(4) {
      top: 40%;
      left: 80%;
      opacity: ${({$diceAmount}) => $diceAmount > 3 ? 1 : 0};
    }

    &:nth-child(5) {
      top: unset;
      bottom: 16px;
      left: 30%;
      opacity: ${({$diceAmount}) => $diceAmount > 4 ? 1 : 0};
    }

    &:nth-child(6) {
      top: 45%;
      left: 50%;
      opacity: ${({$diceAmount}) => $diceAmount > 5 ? 1 : 0};
    }
  }

  ${respondTo.s`
    width: 80%;
  `}
`

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`