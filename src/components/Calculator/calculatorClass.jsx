import React from 'react'
import Display from '../Display'
import KeyPad from '../Keypad'
import ControlPanel from '../ControlPanel'
import History from '../History'
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
