import {Add,  Sub, Mul, Div, ResDiv} from '@/utils/calculator'
import { MainOperators } from '@/constants/token'

export const getResult = (express, calculator, setResult) => {

  const array = express.split(' ')
  const [num1, sign, num2] = array
  
  switch(sign){
    case(MainOperators.PLUS):
      calculator.executeCommand(new Add(num1, num2))
      return  setResult(calculator.value)

    case(MainOperators.MINUS):
      calculator.executeCommand(new Sub(num1, num2))
      return  setResult(calculator.value)

    case(MainOperators.MUL):
      calculator.executeCommand(new Mul(num1, num2))
      return  setResult(calculator.value)

    case(MainOperators.DIV):
      calculator.executeCommand(new Div(num1, num2))
      return  setResult(Math.floor(calculator.value * 1000) / 1000)

    case(MainOperators.RESDIV):
      calculator.executeCommand(new ResDiv(num1, num2))
      return  setResult(calculator.value)

    default:
      console.log("Hello")
  }

}