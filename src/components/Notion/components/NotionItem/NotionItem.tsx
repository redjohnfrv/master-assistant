import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  content: string
  onDeleteNotion: (name: string) => void
}

export const NotionItem = (props: Props) => {
  const {name, content, onDeleteNotion} = props
  const [isContentShown, setIsContentShown] = useState<boolean>(false)

  const onContentShownToggle = () => {
    setIsContentShown(prev => !prev)
  }

  useEffect(() => {
    const list = document.querySelector<HTMLElement>('.notion-list')
    if (list) {
      if (isContentShown) {
        list.style.overflow = 'hidden'
      } else {
        list.style.overflow = 'scroll'
      }
    }

  }, [isContentShown])

  return (
    <Root>
      <Title>
        <h2 onClick={onContentShownToggle}>{name}</h2>
        <DeleteButton onClick={() => onDeleteNotion(name)}>X</DeleteButton>
      </Title>

      {isContentShown && (<Content onClick={onContentShownToggle}>{content}</Content>)}
    </Root>
  )
}

const Root = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const Title = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
`

const DeleteButton = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  color: ${({theme}) => theme.colors.system.error}
`