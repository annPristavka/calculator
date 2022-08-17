import React from 'react'
import { Input } from './styled'

class DisplayClass extends React.Component {
  render() {
    const { value } = this.props
    return (
      <>
        <Input>{value}</Input>
      </>
    )
  }
}

export default DisplayClass
