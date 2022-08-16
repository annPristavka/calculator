import React from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'

class CalculatorClass extends React.Component {
  render() {
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
}

export default CalculatorClass
