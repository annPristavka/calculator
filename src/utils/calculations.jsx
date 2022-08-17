import { Add, Sub, Mul, Div, ResDiv } from './command'

export const getCommand = (sign, digits) => {
  const [x, y] = digits

  switch (sign) {
    case '+':
      return new Add(+x, +y)
    case '-':
      return new Sub(+x, +y)
    case '*':
      return new Mul(+x, +y)
    case '/':
      return new Div(+x, +y)
    case '%':
      return new ResDiv(+x, +y)
  }
}
