import {Add,  Sub, Mul, Div, ResDiv} from '@/utils/calculator'
import { MainOperators } from '@/constants/token'


export const getResult = (express, calculator, setResult) => {
  estimation(calculator, express)
  setResult(calculator.current)
}

const estimation = (calculator, array) => {

  const [num1, sign, num2] = array
  
  switch(sign){
    case(MainOperators.PLUS):
      calculator.executeCommand(new Add(num1, num2))
      return  (calculator.current)

    case(MainOperators.MINUS):
      calculator.executeCommand(new Sub(num1, num2))
      return  (calculator.current)

    case(MainOperators.MUL):
      calculator.executeCommand(new Mul(num1, num2))
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