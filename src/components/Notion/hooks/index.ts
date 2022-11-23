import {useEffect, useState} from 'react'
import {UseFormHandleSubmit} from 'react-hook-form'
import {ListType} from '../../../types'
import {ListObjectService} from '../../../service/listObject'

type Props = {
  handleSubmit: UseFormHandleSubmit<ListType>
}

export const useNotionService = (props: Props) => {
  const {handleSubmit} = props
  const [notionList, setNotionList] = useState<ListType[] | []>([])

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

  return {
    onDeleteNotion,
    onAddNotion,
    notionList
  }
}