import React from 'react'
import PropTypes from 'prop-types'
import { button } from '@/constants/index'
import { Wrapper, StyledButton } from './styled'

const KeyPad = ({ getSimbol }) => {
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

KeyPad.propTypes = { getSimbol: PropTypes.func }

export default KeyPad
