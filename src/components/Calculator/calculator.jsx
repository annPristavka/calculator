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

  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)

    const pos = currentNumber.indexOf()
    setExpress(express.slice(0, pos-1))
  }

  const buttonClickHandle = (value) => {
     if(currentNumber === 0) setCurrentNumber('')
    if(String(currentNumber).includes('.')) {
      setCurrentNumber(currentNumber + value)
    }
    else {setCurrentNumber(value)}   
    setResult(0)
  }

  const oppositeSign = () => {
    setCurrentNumber((-1) * currentNumber)
    setExpress((-1) * currentNumber)
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
        if(currentNumber === 0) buttonClickHandle( value) 
        else setCurrentNumber(currentNumber + value)
        setExpress((express + value))
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
        <History setExpress={setExpress} 
                setCurrentNumber={setCurrentNumber} 
                setResult={setResult}
        />
        <ControlPanel />
      </HistoryDiv>
    </React.Fragment>
  )
}

export default Calculator
