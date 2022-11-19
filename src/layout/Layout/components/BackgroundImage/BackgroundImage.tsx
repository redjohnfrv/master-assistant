import React from 'react'
import styled from 'styled-components'
import {images} from '../../../../assets/images/bgs'
import {fromNumber} from '../../../../utils/fromNumber'

const MIN_BG_NUM = 1
const MAX_BG_NUM = 6 // max bg-x + 1

export const BackgroundImage = React.memo(() => {
  const getRandomBg = fromNumber.getRandom(MIN_BG_NUM, MAX_BG_NUM)
  const image = images[`bg${getRandomBg}`]

  return (
    <Root>
      <img src={image} alt="background" />
    </Root>
  )
})

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: $${({theme}) => theme.colors.primary[100]};
  
  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`