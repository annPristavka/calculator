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
import { getResult } from '@/utils/calculations'
import PropTypes from 'prop-types'

const Calculator = ({ historyShow, setHistoryShow }) => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const [expressArr, setExpressArr] = useState('')

  const dispatch = useDispatch()
  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)
    setExpress(
      express.slice(0, String(currentNumber).indexOf() - 1),
    )
    setExpressArr([...expressArr.slice(0, 2)])
    setCurrentNumber(0)
    setResult(0)
  }

  const buttonClickHandle = (value) => {
    if (currentNumber === 0) setCurrentNumber('')

    expressArr.length === 3
      ?  setExpressArr([...(expressArr[2] + value)])
      :  setExpressArr([...expressArr, value])
    
    String(currentNumber).includes('.')
      ? setCurrentNumber(currentNumber + value)
      : setCurrentNumber(value)
  }

  const oppositeSign = () => {
    if(expressArr.length === 1) setExpressArr([express * (-1)])
    
    if(expressArr.length === 3) {
      setExpressArr([...expressArr.slice(0,2),  -1 * expressArr[2]])
      for(let i=express.length; i>0; i--){
        if(express[i] === ' ' && express[i-1] === '+'){
          setExpress(express.replace(express[i-1], '-'))
          continue
        }
        else if(express[i] === ' ' && express[i-1] === '-'){
          setExpress(express.replace(express[i-1], '+'))
          break
        }
      }
    } else{
      setExpress(-1 * currentNumber)
    }
    setCurrentNumber(-1 * currentNumber)
  }

  const equalsClickHandler = () => {
    dispatch(allHistory(express))
    setExpress('')
    setSign(null)
    setExpressArr([])
  }

  const allResetClickHandle = () => {
    setExpress('')
    setCurrentNumber(0)
    setResult(0)
    setExpressArr([])
  }

  const getSimbol = (e) => {
    const value = e.target.innerHTML

    switch (value) {
      case MainOperators.PLUS:
      case MainOperators.DIV:
      case MainOperators.MUL:
      case MainOperators.RESDIV:
      case MainOperators.MINUS:
        (
          String(expressArr).includes(sign) &&
          expressArr.length === 3
        ) 
        ?  setExpressArr([currentNumber, value])
        :  setExpressArr([...expressArr, value])
        setSign(value)
        setResult(0)
        setExpress(express + ' ' + value + ' ')
        setCurrentNumber(0)
        if (currentNumber === 0)
          setExpress('0' + ' ' + value + ' ')
        break

      case Operators.CLEAR:
        resetClickHandle(value)
        break

      case Operators.OPPOSITE:
        oppositeSign()
        break

      case Operators.EQUAL:
        equalsClickHandler(value)
        setCurrentNumber(0)
        break

      case Operators.COMMA:
        currentNumber === 0 ?  setExpress('0' + value)
        : setCurrentNumber(currentNumber + String(value))
          setExpress(express + String(value))
          expressArr.length === 1
            ? setExpressArr([expressArr+value])
            : setExpressArr([...expressArr.slice(0,2), expressArr[expressArr.length-1]+value])

        break

      case Operators.CLEARALL:
        allResetClickHandle()
        break

      default:
        if (
          expressArr.includes(sign) &&
          expressArr.length === 3
        ) {
          setExpressArr([])
        }

        currentNumber === 0
          ? buttonClickHandle(value)
          : setCurrentNumber(currentNumber + value)
        setExpress(express + value)

        if (sign !== '' && currentNumber === 0)
          setExpressArr([...expressArr, value])
        else if (sign !== '' && expressArr.length === 3) {
          setExpressArr([
            expressArr[0],
            expressArr[1],
            (expressArr[2] = expressArr[2] + value),
          ])
        } else setExpressArr([expressArr + value])
    }
  }

  const getResultExpression = () => {
    if (
      String(expressArr[2]).split('').length > 1 &&
      expressArr.length > 2
    ) {
      const resultOperation = getResult(
        expressArr,
        calculator,
        setResult,
      )
      setCurrentNumber(result)
    } else if (expressArr.length === 3) {
      const resultOperation = getResult(
        expressArr,
        calculator,
        setResult,
      )
      setCurrentNumber(resultOperation)
    }
  }

  useEffect(() => {
    getResultExpression()
  }, [expressArr, currentNumber])

  return (
    <React.Fragment>
      <CalculatorDiv
        className={historyShow ? '' : 'active'}>
        <Display
          value={currentNumber || result}
          sign={sign}
          express={express}
        />
        <KeyPad getSimbol={getSimbol} />
      </CalculatorDiv>
      <HistoryDiv className={historyShow ? '' : 'active'}>
        {historyShow && (
          <History
            setExpress={setExpress}
            setCurrentNumber={setCurrentNumber}
            setResult={setResult}
          />
        )}
        <ControlPanel
          setHistoryShow={setHistoryShow}
        />
      </HistoryDiv>
    </React.Fragment>
  )
}

Calculator.propTypes = {
  historyShow: PropTypes.bool,
  setHistoryShow: PropTypes.func,
}

export default Calculator
