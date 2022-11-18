import React from 'react'
import styled from 'styled-components'
import {NotionItem} from '../NotionItem'
import {ListType} from '../../../../types'

type Props = {
  notionList: ListType[] | []
  onDeleteNotion: (name: string) => void
}

export const NotionList = (props: Props) => {
  const {notionList, onDeleteNotion} = props

  return (
    <Root className="notion-list">
      {notionList.length > 0 && notionList.map(({name, content}) =>
        <NotionItem
          name={name}
          content={content}
          key={name}
          onDeleteNotion={onDeleteNotion}
        />)}
    </Root>
  )
}

const Root = styled.ul`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: auto;
`