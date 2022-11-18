import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Dice} from '../Dice'

const DICES_MAX_AMOUNT = 6
const DOTS_MAX_AMOUNT = 6

type Props = {
  throwValue: number
}

export const Field = (props: Props) => {
  const {throwValue} = props

  const [dices, setDices] = useState<number>(throwValue)

  useEffect(() => {
    setDices(throwValue)
  }, [throwValue])

  if (throwValue < 1) {
    return <div></div>
  }

  return (
    <Root $diceAmount={dices}>
      {Array.from({length: DICES_MAX_AMOUNT})
        .map((_, i) => <Dice key={i} dots={DOTS_MAX_AMOUNT}/>)}
    </Root>
  )
}

const Root = styled.div<{ $diceAmount: number }>`
  position: relative;
  width: 100%;
  height: 60%;
  background: #8fa68f;

  & > div {
    position: absolute;
    opacity: 0;

    &:nth-child(1) {
      top: 0;
      left: 0;
      opacity: 1;
    }

    &:nth-child(2) {
      top: 20%;
      left: 20%;
      opacity: ${({$diceAmount}) => $diceAmount > 1 ? 1 : 0};
    }

    &:nth-child(3) {
      top: 30%;
      left: 50%;
      opacity: ${({$diceAmount}) => $diceAmount > 2 ? 1 : 0};
    }

    &:nth-child(4) {
      top: 40%;
      left: 20%;
      opacity: ${({$diceAmount}) => $diceAmount > 3 ? 1 : 0};
    }

    &:nth-child(5) {
      top: 50%;
      left: 50%;
      opacity: ${({$diceAmount}) => $diceAmount > 4 ? 1 : 0};
    }

    &:nth-child(6) {
      top: 70%;
      left: 20%;
      opacity: ${({$diceAmount}) => $diceAmount > 5 ? 1 : 0};
    }
  }
`