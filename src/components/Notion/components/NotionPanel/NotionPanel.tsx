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

  const onAddCloseClick = () => {
    setIsPanelShown(prev => !prev)
  }

  return (
    <Root>
      <StyledShowHideButton onClick={onAddCloseClick} name={isPanelShown ? 'Close' : 'Add new'}/>

      {isPanelShown && (
        <form onSubmit={() => {
          onAddNotion().then()
          onAddCloseClick()
        }}>
          <Top>
            <StyledInput type="text" {...register('name')} placeholder="title" />
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
`

const Bottom = styled.div`
  width: 100%;
  height: 150px;

  & > textarea {
    width: 100%;
    height: 100%;
    padding: 4px;
    border: 2px solid ${({theme: {colors}}) => colors.primary[300]};
    color: ${({theme: {colors}}) => colors.grayscale[400]};
    outline: none;
    border-radius: 8px;

    &:focus {
      border: 2px solid ${({theme: {colors}}) => colors.primary[200]};
    }
    
    ${({theme: {typography}}) => typography.normal16}
  }
`

const StyledShowHideButton = styled(Button)`
  width: 100px;
  height: 40px;
  padding: 4px 8px;
  margin-bottom: 24px;
`

const StyledInput = styled(Input)`
  width: 100%;
`