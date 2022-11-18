import React, {ReactNode} from 'react'import styled from 'styled-components'type Props = {  children: ReactNode}export const TopLine = (props: Props) => {  const {children} = props  return <Root>{children}</Root>}const Root = styled.div`  display: flex;  flex-direction: column;  align-items: center;  gap: 12px;  margin-bottom: 20px;`