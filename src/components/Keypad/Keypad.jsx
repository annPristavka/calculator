import React from 'react'
import PropTypes from 'prop-types'
import { button } from '@/constants/buttons'

import { Key, Button, ButtonEq } from './styled'

const KeyPad = ({ getSimbol }) => {
  return (
    <Key>
      {button.map((item, index) =>
        item.id === 15 ? (
          <ButtonEq key={item.id} onClick={getSimbol}>
            {item.value}
          </ButtonEq>
        ) : (
          <Button key={item.id} onClick={getSimbol}>
            {item.value}
          </Button>
        ),
      )}
    </Key>
  )
}

KeyPad.propTypes = {getSimbol: PropTypes.func}

export default KeyPad
