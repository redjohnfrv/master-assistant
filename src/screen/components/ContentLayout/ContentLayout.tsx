import React, {ReactNode} from 'react'import styled from 'styled-components'import { RenderVariant } from '../../../types'type Props = {  children: ReactNode  onSetRenderElement: (variant: RenderVariant) => void}export const ContentLayout = (props: Props) => {  const {children, onSetRenderElement} = props  return (    <Root>      {children}      <button onClick={() => onSetRenderElement('list')} />    </Root>  )}const Root = styled.div`  width: 100%;  height: 100%;    &>button {    position: absolute;    bottom: 24px;    left: 50%;    transform: translateX(-50%);    width: 65px;    height: 65px;    border-radius: 50%;    cursor: pointer;    border: 1px solid #FFF;    background: ${({theme: {colors}}) => colors.primary[300]};        &:after {      content: '';      position: absolute;      top: 50%;      left: 50%;      transform: translate(-50%, -50%);      width: 25px;      height: 25px;      border-radius: 8px;      border: 3px solid #FFF;    }  }`