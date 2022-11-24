import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Block} from '../../../../layout'

type Props = {
  name: string
  content: string
  onDeleteNotion: (name: string) => void
  className?: string
}

export const NotionItem = (props: Props) => {
  const {name, content, onDeleteNotion, className} = props
  const [isContentShown, setIsContentShown] = useState<boolean>(false)

  useEffect(() => {
    const list = document.querySelector<HTMLElement>('.notion-list')

    if (list) {
      if (isContentShown) {
        list.style.overflow = 'hidden'
      } else {
        list.style.overflow = 'auto'
      }
    }

  }, [isContentShown])

  return (
    <Root hovered={true} className={className}>
      <li>
        <Title onClick={() => setIsContentShown(true)}>
          <h2>{name}</h2>
          <DeleteButton onClick={() => onDeleteNotion(name)}>X</DeleteButton>
        </Title>

        {isContentShown && (<Content onClick={() => setIsContentShown(false)}>{content}</Content>)}
      </li>
    </Root>
  )
}

const Root = styled(Block)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-bottom: 4px;
`

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
`

const Content = styled(Block)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FFF;
  z-index: 1;
`

const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  font-size: 15px;
  transform: scaleX(1.5);
  text-shadow: 0 0 10px #FFF;
  color: ${({theme}) => theme.colors.system.error};
`