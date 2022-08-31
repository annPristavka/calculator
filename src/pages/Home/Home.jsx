import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Display from '@/components/Display'
import KeyPad from '@/components/Keypad'
import ControlPanel from '@/components/ControlPanel'
import History from '@/components/History'
import { allHistory } from '@/store/reducers/command'
import { MainOperators, Operators } from '@/constants/index'
import { getResult } from '@/utils/calculations'
import { localeStorageGetTheme } from '@/utils/localeStorage'

import {
  Wrapper,
  CalculatorWrapper,
  HistoryWrapper,
} from './styled'

const Home = () => {
  const [themeCurrent, setThemeCurrent] = useState()
  const [sign, setSign] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [express, setExpress] = useState('')
  const [expressArr, setExpressArr] = useState('')
  const [historyShow, setHistoryShow] = useState(true)

  const dispatch = useDispatch()

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
      ? setExpressArr([...(expressArr[2] + value)])
      : setExpressArr([...expressArr, value])

    String(currentNumber).includes('.')
      ? setCurrentNumber(currentNumber + value)
      : setCurrentNumber(value)
  }

  const oppositeSignClickHandler = () => {
    if (expressArr.length === 1)
      setExpressArr([express * -1])

    if (expressArr.length === 3) {
      setExpressArr([
        ...expressArr.slice(0, 2),
        -1 * expressArr[2],
      ])
      for (let i = express.length; i > 0; i--) {
        if (express[i] === ' ' && express[i - 1] === '+') {
          setExpress(express.replace(express[i - 1], '-'))
          continue
        } else if (
          express[i] === ' ' &&
          express[i - 1] === '-'
        ) {
          setExpress(express.replace(express[i - 1], '+'))
          break
        }
      }
    } else {
      setExpress(-1 * currentNumber)
    }
    setCurrentNumber(-1 * currentNumber)
  }

  const equalsClickHandler = () => {
    dispatch(allHistory(express))
    setExpress('')
    setSign(null)
    setExpressArr([])
    setCurrentNumber(0)
  }

  const allResetClickHandle = () => {
    setExpress('')
    setCurrentNumber(0)
    setResult(0)
    setExpressArr([])
  }

  const signOperationClickHandler = (value) => {
    String(expressArr).includes(sign) &&
    expressArr.length === 3
      ? setExpressArr([currentNumber, value])
      : setExpressArr([...expressArr, value])
    setSign(value)
    setResult(0)
    setExpress(express + ' ' + value + ' ')
    setCurrentNumber(0)
    if (currentNumber === 0)
      setExpress('0' + ' ' + value + ' ')
    if (currentNumber === 0 && expressArr.length === 0)
      setExpressArr([0, value])
  }

  const commaOperationClickHandler = (value) => {
    currentNumber === 0
      ? setExpress('0' + value)
      : setCurrentNumber(currentNumber + String(value))
    setExpress(express + String(value))
    expressArr.length === 1
      ? setExpressArr([expressArr + value])
      : setExpressArr([
          ...expressArr.slice(0, 2),
          expressArr[expressArr.length - 1] + value,
        ])
  }

  const defaultOperationClickHandler = (value) => {
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

  const getSimbol = (e) => {
    const value = e.target.innerHTML

    switch (value) {
      case MainOperators.PLUS:
      case MainOperators.DIV:
      case MainOperators.MUL:
      case MainOperators.RESDIV:
      case MainOperators.MINUS:
        if (expressArr.length === 2 && sign === value) break
        if (expressArr.length === 2 && sign !== value) {
          setExpressArr([expressArr[0], value])
          setExpress(
            express.slice(0, express.length - 2) +
              value +
              ' ',
          )
          setSign(value)
        } else signOperationClickHandler(value)
        break

      case Operators.CLEAR:
        resetClickHandle(value)
        break

      case Operators.OPPOSITE:
        oppositeSignClickHandler()
        break

      case Operators.EQUAL:
        equalsClickHandler(value)
        break

      case Operators.COMMA:
        commaOperationClickHandler(value)
        break

      case Operators.CLEARALL:
        allResetClickHandle()
        break

      default:
        defaultOperationClickHandler(value)
    }
  }

  const getResultExpression = () => {
    if (expressArr.length === 3) {
      const resultOperation = getResult(
        expressArr,
        setResult,
      )
      setCurrentNumber(resultOperation)
    }
  }

  const getTheme = () => {
    const theme = localeStorageGetTheme()
    setThemeCurrent(theme)
  }

  useEffect(() => {
    getTheme()
    return () => getTheme()
  })

  useEffect(() => {
    getResultExpression()
  }, [expressArr, currentNumber])

  return (
    <Wrapper backgroundTheme={themeCurrent}>
      <CalculatorWrapper history={historyShow}>
        <Display
          value={currentNumber || result}
          sign={sign}
          express={express}
        />
        <KeyPad getSimbol={getSimbol} />
      </CalculatorWrapper>
      <HistoryWrapper history={historyShow}>
        {historyShow && (
          <History
            setExpress={setExpress}
            setCurrentNumber={setCurrentNumber}
            setResult={setResult}
          />
        )}
        <ControlPanel setHistoryShow={setHistoryShow} />
      </HistoryWrapper>
    </Wrapper>
  )
}

export default Home
