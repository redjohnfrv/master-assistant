import React from 'react'import styled from 'styled-components'import {useTime} from 'react-timer-hook'import {fromNumber} from '../../utils/fromNumber'import {Block} from '../../layout'export const Watch = () => {  const {    minutes,    hours,    ampm,  } = useTime({format: '12-hour'})  return (    <Root>      <Block>        {fromNumber.getDoubleZeroTime(hours)}:{fromNumber.getDoubleZeroTime(minutes)} {ampm}      </Block>    </Root>  )}const Root = styled.section`  width: 100%;`