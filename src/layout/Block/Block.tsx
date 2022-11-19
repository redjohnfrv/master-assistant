import React, {ReactNode} from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  radius?: number
}

export const Block = (props: Props) => {
  const {children, radius = 8} = props

  return (
    <Root $radius={radius}>
      {children}
    </Root>
  )
}

const Root = styled.div<{$radius: number}>`
  width: max-content;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: ${({$radius}) => $radius}px;
  color:  ${({theme: {colors}}) => colors.grayscale[0]};
  background: ${({theme: {colors}}) => colors.primary[300]};

  ${({theme: {typography}}) => typography.normal16};
`