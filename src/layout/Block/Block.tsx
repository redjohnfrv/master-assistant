import React, {ReactNode} from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  radius?: number
  hovered?: boolean
  className?: string
}

export const Block = (props: Props) => {
  const {children, radius = 8, hovered = false, className} = props

  return (
    <Root $radius={radius} $hovered={hovered} className={className}>
      {children}
    </Root>
  )
}

const Root = styled.div<{ $radius: number, $hovered: boolean }>`
  width: max-content;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: ${({$radius}) => $radius}px;
  cursor: ${({$hovered}) => $hovered ? 'pointer' : 'default'};
  color: ${({theme: {colors}}) => colors.grayscale[0]};
  background: ${({theme: {colors}}) => colors.primary[300]};

  ${({theme: {typography}}) => typography.normal16};

  &:hover {
    background: ${({theme: {colors}, $hovered}) => $hovered ? colors.primary[200] : colors.primary[300]};
  }
`