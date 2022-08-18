import {Add,  Sub, Mul, Div, ResDiv} from '@/utils/calculator'
import { MainOperators } from '@/constants/token'

export const getResult = (express, calculator, setResult) => {

  const array = express.split(' ')
  const {num1, sign, num2} = array
  console.log("array", array)
  
  switch(sign){
    case(MainOperators.PLUS):
      calculator.executeCommand(new Add(num1, num2))
      console.log("CALCULATOR",calculator.value)
    break

    case(MainOperators.MINUS):
      calculator.executeCommand(new Sub(num1, num2))
    break

    case(MainOperators.MUL):
      calculator.executeCommand(new Mul(num1, num2))
    break

    case(MainOperators.DIV):
      calculator.executeCommand(new Div(num1, num2))
    break

    case(MainOperators.RESDIV):
      calculator.executeCommand(new ResDiv(num1, num2))
    break
    default:
      console.log("Hello")
  }

  return setResult(calculator.value)  
}