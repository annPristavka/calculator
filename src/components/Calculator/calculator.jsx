import React, {useState} from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'

const Calculator = () => {
  const [sign, setSign] = useState('')
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
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
