import React from 'react'
import { Wrapper, Text } from './styled'

class DisplayClass extends React.Component {
  render() {
    const { value, express } = this.props
    return (
      <Wrapper>
        <Text>{express}</Text>
        <Text>{value}</Text>
      </Wrapper>
    )
  }
}

export default DisplayClass
