import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {NotionList, NotionPanel} from './components'
import {useForm} from 'react-hook-form'
import {ListObjectService} from '../../service/listObject'
import {ListType} from '../../types'

export const Notion = () => {
  const [notionList, setNotionList] = useState<ListType[] | []>([])
  const {register, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      content: '',
    }
  })

  const onAddNotion = handleSubmit((value) => {
    const newListItem = {
      name: value.name,
      content: value.content,
    }

    ListObjectService.objList.push(newListItem)
    ListObjectService.setList()

    setNotionList(prev => [...prev, newListItem])
  })

  const onDeleteNotion = async (name: string) => {
    let tmpList: ListType[] | [] = []

    await ListObjectService.getList()
      .then(value => {
        if (value && value.length > 0) {
          tmpList = [...value]
        }
      })

    const newList: ListType[] = tmpList.filter(item => item.name !== name)

    await ListObjectService.clearList()
    ListObjectService.objList = [...newList]
    ListObjectService.setList()
    setNotionList(prev => [...newList])
  }

  useEffect(() => {
    ListObjectService.getList()
      .then(value => {
        if (value && value.length > 0) {
          setNotionList(value)
        }
      })
  }, [notionList.length])

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