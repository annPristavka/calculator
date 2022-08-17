import React, { useState } from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'
import { getCommand } from '@/utils/calculations'
import { useDispatch } from 'react-redux'
import { allHistory } from '@/reducers/command'

const Calculator = () => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const valueArray = []
  const dispatch = useDispatch()

  console.log('express', express)

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
    setCurrentNumber('')
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
        getCommand(value, [valueArray])
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
        valueArray.push(value)
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
