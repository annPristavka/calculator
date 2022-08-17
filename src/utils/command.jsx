export class Command {
  constructor(execute){
    this.execute = execute
  }
}



export class Sub {
  constructor(x, y) {
    this.y = y
    this.x = x
  }

  execute() {
    return this.x - this.y
  }
}

export class Mul {
  constructor(x, y) {
    this.y = y
    this.x = x
  }

  execute() {
    return this.x * this.y
  }
}

export class Div {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x / this.y
  }
}

export class ResDiv {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x % this.y
  }
}
