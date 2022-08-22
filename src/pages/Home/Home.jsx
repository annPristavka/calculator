import React , {useState}from 'react'
import Calculator from '@Components/Calculator/index'
import { CalcContainer } from './styled'

export default ({value, historyShow, setHistoryShow}) => {
  return (
    <CalcContainer bg={value}>
      <Calculator historyShow={historyShow} setHistoryShow={setHistoryShow}/>
    </CalcContainer>
  )
}
