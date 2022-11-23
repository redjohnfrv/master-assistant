import React, {ButtonHTMLAttributes} from 'react'
import styled from 'styled-components'

type Props = {
  name: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
  const {name} = props

  return (
    <Root {...props} >{name}</Root>
  )
}

const Root = styled.button``