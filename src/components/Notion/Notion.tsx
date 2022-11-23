import React from 'react'
import styled from 'styled-components'
import {NotionList, NotionPanel} from './components'
import {useForm} from 'react-hook-form'
import {useNotionService} from './hooks'

export const Notion = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      content: '',
    }
  })

  const {
    notionList,
    onDeleteNotion,
    onAddNotion
  } = useNotionService({handleSubmit})

  return (
    <Root>
      <NotionPanel register={register} onAddNotion={onAddNotion}/>
      <NotionList notionList={notionList} onDeleteNotion={onDeleteNotion}/>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`