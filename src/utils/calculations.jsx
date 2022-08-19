import {Add,  Sub, Mul, Div, ResDiv} from '@/utils/calculator'
import { MainOperators, Operators } from '@/constants/token'


export const getResult = (express, calculator, setResult) => {

  let expressPart = ''
  const array = express.split(' ')
  const signs = array.filter((item) => item === '+' || item === '-' || item === '*' || item === '/')
  let current = 0

  const getCurrentNumber = () => {
    expressPart += express.slice(0, 5)
    current = estimation(calculator, setResult, expressPart)
    expressPart = express.slice(5)
  }

  const getCurrentOrResultNumber = () => {
    current = estimation(calculator, setResult, current + expressPart.slice(0,4))
  }

  for(let i=0; i<signs.length; i++){
    expressPart === '' ?  getCurrentNumber() :  getCurrentOrResultNumber()
    setResult(current)
  }
}

const estimation = (calculator, setResult, array) => {

  array = array.split(' ')
  const [num1, sign, num2] = array
  console.log('array', array)
  
  switch(sign){
    case(MainOperators.PLUS):
      calculator.executeCommand(new Add(num1, num2))
      return  (calculator.current)

    case(MainOperators.MINUS):
      calculator.executeCommand(new Sub(num1, num2))
      return  (calculator.current)

    case(MainOperators.MUL):
      calculator.executeCommand(new Mul(num1, num2))
      console.log('calculator.value', calculator.value)
      return  (calculator.current)

    case(MainOperators.DIV):
      calculator.executeCommand(new Div(num1, num2))
      return  String((Math.floor(calculator.current * 1000) / 1000))

    case(MainOperators.RESDIV):
      calculator.executeCommand(new ResDiv(num1, num2))
      return  (calculator.current)

    default:
      console.log("Hello")
  }
}