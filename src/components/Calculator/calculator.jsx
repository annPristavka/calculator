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

const Calculator = ({ historyShow, setHistoryShow }) => {
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const [expressArr, setExpressArr] = useState('')

  console.log('expressAttM', expressArr)
  console.log('currentNumber', currentNumber)
  console.log('result', result)
  console.log('expressArrType', typeof expressArr)

  const dispatch = useDispatch()
  const calculator = useMemo(() => new CalculatorC(), [])

  const resetClickHandle = () => {
    setCurrentNumber(0)
    console.log('currentNumber', currentNumber)
    setExpress(
      express.slice(0, String(currentNumber).indexOf() - 1),
    )
    setExpressArr([...expressArr.slice(0, 2)])
    setCurrentNumber(0)
    setResult(0)
  }

  const buttonClickHandle = (value) => {
    if (currentNumber === 0) setCurrentNumber('')

    if (expressArr.length === 3) {
      setExpressArr([...(expressArr[2] + value)])
    } else {
      setExpressArr([...expressArr, value])
    }
    String(currentNumber).includes('.')
      ? setCurrentNumber(currentNumber + value)
      : setCurrentNumber(value)
  }

  const oppositeSign = () => {
    setCurrentNumber(-1 * currentNumber)
    setExpress(-1 * currentNumber)
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
        if (
          String(expressArr).includes(sign) &&
          expressArr.length === 3
        ) {
          setExpressArr([currentNumber, value])
        } else {
          setExpressArr([...expressArr, value])
        }

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
        if (currentNumber === 0) setExpress('0' + value)
        else {
          setCurrentNumber(currentNumber + String(value))
          setExpress(express + String(value))
        }

        console.log(currentNumber)
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

  useEffect(() => {
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
      console.log('RESULTOPERATION', resultOperation)
    } else if (expressArr.length === 3) {
      const resultOperation = getResult(
        expressArr,
        calculator,
        setResult,
      )
      setCurrentNumber(resultOperation)
    }
    console.log('expressAttType', typeof expressArr)
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
          className={historyShow ? '' : 'active'}
        />
      </HistoryDiv>
    </React.Fragment>
  )
}

export default Calculator
