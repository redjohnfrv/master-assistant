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
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: ${({$radius}) => $radius}px;
  color:  ${({theme: {colors}}) => colors.grayscale[0]};
  background: ${({theme: {colors}}) => colors.primary[300]};

  ${({theme: {typography}}) => typography.normal16};
`