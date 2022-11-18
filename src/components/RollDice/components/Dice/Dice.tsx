import React from 'react'
import styled from 'styled-components'
import {Dot} from '../Dot'
import {fromNumber} from '../../../../utils/fromNumber'

type Props = {
  dots: number
}

export const Dice = (props: Props) => {
  const {dots} = props

  const dotsValue = fromNumber.getDiceValue()

  return (
    <Root $dotsValue={dotsValue}>
      {Array.from({length: dots}).map((_, i) => <Dot key={i}/>)}

      <CentralDot $dotsValue={dotsValue}/>
    </Root>
  )
}

const Root = styled.div<{ $dotsValue: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: azure;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  & > div {
    opacity: 0;

    &:nth-child(1) {
      opacity: ${({$dotsValue}) => $dotsValue === 1 ? 0 : 1};
    }

    &:nth-child(2) {
      opacity: ${({$dotsValue}) => $dotsValue > 3 ? 1 : 0};
    }

    &:nth-child(3) {
      opacity: ${({$dotsValue}) => $dotsValue === 6 ? 1 : 0};
    }

    &:nth-child(4) {
      opacity: ${({$dotsValue}) => $dotsValue === 6 ? 1 : 0};
    }

    &:nth-child(5) {
      opacity: ${({$dotsValue}) => $dotsValue > 3 ? 1 : 0};
    }

    &:nth-child(6) {
      opacity: ${({$dotsValue}) => $dotsValue === 1 ? 0 : 1};
    }
  }
`

const CentralDot = styled.div<{ $dotsValue: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  transform: translate(-50%, -50%);
  opacity: ${({$dotsValue}) => $dotsValue % 2 ? 1 : 0} !important;
`