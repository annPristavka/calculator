import React, { useState, useMemo } from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'
import { getCommand } from '@/utils/calculations'
import { useDispatch } from 'react-redux'
import { allHistory } from '@/reducers/command'
import { CalculatorC, Add } from '@/utils/calculator'
import { MainOperators, Operators } from '@/constants/token'

const Calculator = () => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const dispatch = useDispatch()
  console.log("result", result)
  console.log("sign", sign)
  console.log("currentNumber", currentNumber)
  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)
  }

  const buttonClickHandle = (value) => {
    setCurrentNumber(value)
  }

  const oppositeSign = () => {
    setCurrentNumber(-currentNumber)
  }

  const equalsClickHandler = (value) => {
    dispatch(allHistory(express))
    setExpress('')
  }

  const allResetClickHandle = () => {
    setExpress('')
    setCurrentNumber(0)
  }

  const getSimbol = (e) => {
    const value = e.target.innerHTML
    switch (value) {
      case MainOperators.PLUS:
      // case MainOperators.DIV:
      // case MainOperators.MUL:
      // case MainOperators.RESDIV:
      // case MainOperators.MINUS:
        // setCurrentNumber('')
        setSign(value)
        calculator.execute(new Add(currentNumber))
        setResult(calculator.value)
        setExpress(express + value)
        break
      case Operators.CLEAR:
        resetClickHandle(value)
        break
      case Operators.OPPOSITE:
        oppositeSign()
        break
      case Operators.EQUAL:
        equalsClickHandler(value)
        setCurrentNumber(result)
        break
      case Operators.COMMA:
        setCurrentNumber(currentNumber + value)
        break
      case Operators.CLEARALL:
        allResetClickHandle()
        break

      default:
        buttonClickHandle(value)
        setExpress(express + value)
        setSign(null)
    }
  }

  return (
    <React.Fragment>
      <CalculatorDiv>
        <Display
          value={currentNumber}
          sign={sign}
          express={express}
        />
        <KeyPad getSimbol={getSimbol} />
      </CalculatorDiv>
      <HistoryDiv>
        <History />
        <ControlPanel />
      </HistoryDiv>
    </React.Fragment>
  )
}

export default Calculator
