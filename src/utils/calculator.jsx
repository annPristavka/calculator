export class Command {
  execute(value){}
}

export class CalculatorC {
  constructor() {
    this.current = 0
    this.history = []
  }

  executeCommand(command) {
    this.history.push(command)
    this.current = command.execute(this.current)
    console.log("HISTORY", this.history)
  }

  getCurrent(){
    return this.current
  }

  setValue(value) {
    this.current = value
  }

}

 class Add extends Command{
  constructor(x, y) {
    super()
    this.x = +x
    this.y = +y
  }

  execute() {
    console.log('hello', typeof(this.x), typeof(this.y))
    return this.y + this.x
  }
}

class Sub extends Command{
  constructor(x, y) {
    super()
    this.x = +x
    this.y = +y
  }

  execute() {
    return this.x - this.y
  }
}

class Mul extends Command{
  constructor(x, y) {
    super()
    this.x = +x
    this.y = +y
  }

  execute() {
    return this.x * this.y
  }
}

class Div extends Command{
  constructor(x, y) {
    super()
    this.x = +x
    this.y = +y
  }

  execute() {
    return this.x / this.y
  }
}

class ResDiv extends Command{
  constructor(x, y) {
    super()
    this.x = +x
    this.y = +y
  }

  execute() {
    return this.x % this.y
  }
}


export {Add, Sub, Mul, Div, ResDiv}

