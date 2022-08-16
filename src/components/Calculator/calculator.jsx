import React from 'react'
import Display from '../Display'
import KeyPad from '../Keypad'
import ControlPanel from '../ControlPanel'
import History from '../History'
import { CalculatorDiv, HistoryDiv } from './styled'

const Calculator = () => {
  return (
    <>
      <CalculatorDiv>
        <Display />
        <KeyPad />
      </CalculatorDiv>
      <HistoryDiv>
        <History />
        <ControlPanel />
      </HistoryDiv>
    </>
  )
}

export default Calculator
