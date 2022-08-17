export class CalculatorC {
  constructor() {
    this.current = 0
  }

  execute(command) {
    this.current = command.execute()
  }

  reset() {
    this.current = 0
  }
}
