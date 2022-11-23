import React, {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {...Props},
  ref,
) => {
  return (
    <Root ref={ref} {...Props} />
  )
}

export default forwardRef<HTMLInputElement, Props>(Input)

const Root = styled.input`
  padding: 4px;
  border: 2px solid ${({theme: {colors}}) => colors.primary[300]};
  color: ${({theme: {colors}}) => colors.grayscale[400]};
  outline: none;
  border-radius: 8px;
  
  &:focus {
    border: 2px solid ${({theme: {colors}}) => colors.primary[200]};
  }
  
  ${({theme: {typography}}) => typography.normal16}
`