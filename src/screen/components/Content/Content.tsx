import React, {BaseSyntheticEvent, useState} from 'react'import {FormType, RenderVariant} from '../../../types'import {List, SetTimer} from '../../../components'import {render} from './utils'import {UseFormRegister} from 'react-hook-form'import {ContentLayout} from '../ContentLayout/ContentLayout'type Props = {  register: UseFormRegister<FormType>  onTimerSubmit: (e?: BaseSyntheticEvent | undefined) => Promise<void>}export const Content = (props: Props) => {  const {register, onTimerSubmit} = props  const onSetRenderElement = (variant: RenderVariant) => {    if (variant === 'list') {      setEl(<List onClick={onSetRenderElement}/>)    }    if (variant === 'timer') {      setEl(<SetTimer register={register} onTimerSubmit={onTimerSubmit}/>)    }  }  const [el, setEl] = useState<JSX.Element>(<List onClick={onSetRenderElement}/>)  return render (    <ContentLayout onSetRenderElement={onSetRenderElement}>      {el}    </ContentLayout>  )}