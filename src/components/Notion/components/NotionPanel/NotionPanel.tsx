import React, {BaseSyntheticEvent, useState} from 'react'
import styled from 'styled-components'
import {UseFormRegister} from 'react-hook-form'
import {ListType} from '../../../../types'
import {Button, Input} from '../../../../ui'

type Props = {
  register: UseFormRegister<ListType>
  onAddNotion: (e?: BaseSyntheticEvent | undefined) => Promise<void>
}

export const NotionPanel = (props: Props) => {
  const {register, onAddNotion} = props
  const [isPanelShown, setIsPanelShown] = useState<boolean>(false)

  const onAddNewClick = () => {
    setIsPanelShown(prev => !prev)
  }

  return (
    <Root>
      <Button onClick={onAddNewClick} name={isPanelShown ? 'close' : 'Add new'}/>

      {isPanelShown && (
        <form onSubmit={onAddNotion}>
          <Top>
            <Input type="text" {...register('name')} placeholder="title" />
            <Button type="submit" name="Add" />
          </Top>

          <Bottom>
            <textarea {...register('content')} placeholder="description"/>
          </Bottom>
        </form>
      )}
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;

  & > input {
    width: 100%;
  }

  & > button {
    width: 80px;
  }
`

const Bottom = styled.div`
  width: 100%;
  height: 150px;

  & > textarea {
    width: 100%;
    height: 100%;
  }
`