import React from 'react'import styled from 'styled-components'import {useTime} from 'react-timer-hook'import {fromNumber} from '../../utils/fromNumber'export const Watch = () => {  const {    minutes,    hours,    ampm,  } = useTime({format: '12-hour'})  return (    <Root>      <div style={{fontSize: '15px'}}>        {fromNumber.getDoubleZeroTime(hours)}:{fromNumber.getDoubleZeroTime(minutes)} {ampm}      </div>    </Root>  )}const Root = styled.section`  width: 100%;`