import React from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'

class CalculatorClass extends React.Component {
  getSimbol = (e) => {
    console.log(e.target.innerHTML)
  }

  render() {
    const { value } = this.props
    return (
      <>
        <CalculatorDiv>
          <Display value={value} />
          <KeyPad getSimbol={this.getSimbol} />
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
