export class Add {
  constructor() {
    this.y = y
    this.x = x
  }
  execute() {
    return y + x
  }
}

export class Sub {
  constructor() {
    this.y = y
    this.x = x
  }

  execute() {
    return x - y
  }
}

export class Mul {
  constructor() {
    this.y = y
    this.x = x
  }

  execute() {
    return x * y
  }
}

export class Div {
  constructor() {
    this.x = x
    this.y = y
  }

  execute() {
    return x / y
  }
}

export class ResDiv {
  constructor() {
    this.x = x
    this.y = y
  }
  execute() {
    return x % y
  }
}
