import React, { useState, useMemo, useEffect } from 'react'
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
  const [expressArr, setExpressArr] = useState('')

  console.log('sign', sign)
  console.log('expressAtt', (expressArr))
  console.log('currentNumber', (currentNumber))
  console.log('result', (result))

  const dispatch = useDispatch()
  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)
    setExpress(express.slice(0, currentNumber.indexOf()-1))
  }

  const buttonClickHandle = (value) => {
    if(currentNumber === 0) setCurrentNumber('')
    setExpressArr([... expressArr, value])
    String(currentNumber).includes('.') ? setCurrentNumber(currentNumber + value)
                                        : setCurrentNumber(value) 
    setResult(0)
  }

  const oppositeSign = () => {
    setCurrentNumber((-1) * currentNumber)
    setExpress((-1) * currentNumber)
  } 

  const equalsClickHandler = () => {
  
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
        setExpressArr([... expressArr, value])
        setExpress(express + ' ' +value + ' ')
        setCurrentNumber(0)
        if((currentNumber) === 0) 
          setExpress('0' + ' ' +value + ' ')   
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
       
        if(currentNumber === 0) setExpress('0' + value)
        else{
          setCurrentNumber(currentNumber + String(value)) 
          setExpress(express + String(value))
        }
        
        console.log(currentNumber)
        break

      case Operators.CLEARALL:
        allResetClickHandle()
        break

      default:
        currentNumber === 0 ? buttonClickHandle(value) : setCurrentNumber(currentNumber + value)
        setExpress((express + value))
    }
  }

  useEffect( () => {
      if(expressArr.length === 3) {
        getResult(expressArr, calculator, setResult)
        setExpressArr([])
        setCurrentNumber(result)
      } else
      if(expressArr.length === 0) {
      
        setCurrentNumber(result)
        setExpressArr([...expressArr, result].slice(1))
      }
    }, [expressArr.length === 3],
  )

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
        <History 
            setExpress={setExpress} 
            setCurrentNumber={setCurrentNumber} 
            setResult={setResult}
        />
        <ControlPanel />
      </HistoryDiv>
    </React.Fragment>
  )
}

export default Calculator
