import React, {ButtonHTMLAttributes} from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
  const {name} = props

  return (
    <Root {...props} >{name}</Root>
  )
}

const Root = styled.button`
  border-radius: 8px;
  border: 2px solid #FFF;
  color: #FFF;
  background: ${({theme: {colors}}) => colors.primary[300]};
  
  ${({theme: {typography}}) => typography.normal16}
`