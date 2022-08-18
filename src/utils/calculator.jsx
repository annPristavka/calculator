export interface Command {
  execute(value: number): number;
  undo(value: number): number
}

export class CalculatorC {
  constructor() {
    this.value = 0
    this.history = []
  }

  executeCommand(command : Command) {
    this.history.push(command)
    this.value = command.execute(this.value)
    console.log("HISTORY", this.history)
    
  }

  undo() {
    const command = this.history.pop()
    if (command) {
      this.value = command.undo(this.value)
    }
  }

  setValue(value) {
    this.value = value
  }

}

 class Add implements Command{
  constructor(x, y) {
    this.x = +x
    this.y = +y
    
  }

  execute() {
    return this.y + this.x
  }
}

class Sub implements Command{
  constructor(x, y) {
    this.x = +x
    this.y = +y
  }

  execute(x, y) {
    return this.x - this.y
  }
}

class Mul implements Command{
  constructor(x, y) {
    this.x = +x
    this.y = +y
  }

  execute(x, y) {
    return this.x * this.y
  }
}

class Div implements Command{
  constructor(x, y) {
    this.x = +x
    this.y = +y
  }

  execute(x, y) {
    return this.x / this.y
  }
}

class ResDiv implements Command{
  constructor(x, y) {
    this.x = +x
    this.y = +y
  }

  execute(x, y) {
    return this.x % this.y
  }
}


export {Add, Sub, Mul, Div, ResDiv}

