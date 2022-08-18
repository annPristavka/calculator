import React, { useState, useMemo } from 'react'
import Display from '@Components/Display'
import KeyPad from '@Components/Keypad'
import ControlPanel from '@Components/ControlPanel'
import History from '@Components/History'
import { CalculatorDiv, HistoryDiv } from './styled'
import { useDispatch } from 'react-redux'
import { allHistory } from '@/reducers/command'
import { CalculatorC } from '@/utils/calculator'
import { MainOperators, Operators } from '@/constants/token'
import {getResult} from '@/utils/calculations'

const Calculator = () => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const dispatch = useDispatch()

  console.log("currentNumber", currentNumber)
  console.log("sign", sign)
  console.log("result", result)
  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)
  }

  const buttonClickHandle = (value) => {
    if(String(currentNumber).includes('.')) {
      setCurrentNumber(currentNumber + value)
    }
    else
    setCurrentNumber(value)
  }

  const oppositeSign = () => {
    setCurrentNumber(-currentNumber)
  } 

  const setRes = (e) => {
    setResult(e)
  }

  const equalsClickHandler = (value) => {
    getResult(express, calculator, setResult)
    dispatch(allHistory(express))
    setExpress('')
    setSign(null)
    setCurrentNumber(0)
  }

  const allResetClickHandle = () => {
    setExpress('')
    setCurrentNumber(0)
    setResult(0)
  }

  const getSimbol = (e) => {
    const value = e.target.innerHTML
  
    switch (value) {
      case MainOperators.PLUS:
      case MainOperators.DIV:
      case MainOperators.MUL:
      case MainOperators.RESDIV:
      case MainOperators.MINUS:
        setSign(value)
        setExpress(express + ' ' +value + ' ')
        setCurrentNumber(0)
        if((currentNumber) === 0) {
          setExpress('0' + ' ' +value + ' ')   
        }
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
        setExpress(express + value)
        if((currentNumber) === 0) {
          setExpress('0' + value)   
        } 
          setCurrentNumber(currentNumber + value)
        break

      case Operators.CLEARALL:
        allResetClickHandle()
        break

      default:
        buttonClickHandle(value)
        setExpress(express + value)
    }
  }

  return (
    <React.Fragment>
      <CalculatorDiv>
        <Display
          value={currentNumber || result}
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
