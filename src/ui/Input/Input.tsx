import React, {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {className, ...Props},
  ref,
) => {
  return (
    <Root ref={ref} {...Props} />
  )
}

export default forwardRef<HTMLInputElement, Props>(Input)

const Root = styled.input``