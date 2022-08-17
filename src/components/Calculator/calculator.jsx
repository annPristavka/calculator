import React, { useState } from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'
import { getCommand } from '@/utils/calculations'
import { useDispatch } from 'react-redux'
import { allHistory } from '@/reducers/command'
import { CalculatorC } from '@/utils/calculator'

const Calculator = () => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const dispatch = useDispatch()

  const calculator = new Calculator()

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
    console.log(e.target.innerHTML)
    const value = e.target.innerHTML
    switch (value) {
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        getCommand(value, [])
        // setCurrentNumber('')
        setSign(value)
        setExpress(express + value)
        break
      case 'C':
        resetClickHandle(value)
        break
      case '+-':
        oppositeSign()
        break
      case '=':
        equalsClickHandler(value)
        break
      case '.':
        setCurrentNumber(currentNumber + value)
        break
      case 'CE':
        allResetClickHandle()
        break

      default:
        buttonClickHandle(value)
        setExpress(express + value)
        setSign(null)
    }
  }

  return (
    <>
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
    </>
  )
}

export default Calculator
