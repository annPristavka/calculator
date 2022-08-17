import React from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'

class CalculatorClass extends React.Component {

  render() {
    const { value } = this.props
    return (
      <React.Fragment>
        <CalculatorDiv>
          <Display value={value} />
          <KeyPad getSimbol={this.getSimbol} />
        </CalculatorDiv>
        <HistoryDiv>
          <History />
          <ControlPanel />
        </HistoryDiv>
      </React.Fragment>
    )
  }
}

export default CalculatorClass
