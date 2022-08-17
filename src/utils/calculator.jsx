export interface Command {
  execute(value: number): number;
  undo(value: number): number
}

export class CalculatorC {
  constructor() {
    this.value = 0
    this.history = []
  }

  execute(command : Command) {
    this.history.push(command)
    this.value = command.execute(this.value)
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
  constructor(x) {
    this.x = +x
  }

  execute(currentValue) {
    return currentValue + this.x
  }
}

export {Add}

