import React from 'react'
import { Input } from './styled'

class DisplayClass extends React.Component {
  render() {
    const { value } = this.props
    return (
      <React.Fragment>
        <Input>{value}</Input>
      </React.Fragment>
    )
  }
}

export default DisplayClass
