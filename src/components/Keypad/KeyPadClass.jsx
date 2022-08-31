import React from 'react'
import { button } from '@/constants/index'
import { Wrapper, StyledButton } from './styled'

class KeyPadClass extends React.Component {
  render() {
    const { getSimbol } = this.props
    return (
      <Wrapper>
        {button.map(({ id, value }) => (
          <StyledButton
            key={id}
            onClick={getSimbol}
            idButton={id}>
            {value}
          </StyledButton>
        ))}
      </Wrapper>
    )
  }
}

export default KeyPadClass
